import { useParams } from 'react-router-dom';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Select from 'react-select';
import ItemGrid from '../../components/ItemGrid/ItemGrid';
import useGetExplore from '../../Hooks/useGetExplore/useGetExplore';
import useGetGenre from '../../Hooks/useGetGenre/useGetGenre';

const sortbyData = [
  { value: 'popularity.desc', label: 'Popularity Descending' },
  { value: 'popularity.asc', label: 'Popularity Ascending' },
  { value: 'vote_average.desc', label: 'Rating Descending' },
  { value: 'vote_average.asc', label: 'Rating Ascending' },
  {
    value: 'primary_release_date.desc',
    label: 'Release Date Descending',
  },
  { value: 'primary_release_date.asc', label: 'Release Date Ascending' },
  { value: 'original_title.asc', label: 'Title (A-Z)' },
];

export default function Explore() {
  const [genresId, setGenresId] = useState([]);
  const [sort, setSort] = useState('popularity.desc');
  const { mediaType } = useParams();
  const { data: genres } = useGetGenre(mediaType);
  const { data, hasNextPage, fetchNextPage } = useGetExplore(
    mediaType,
    genresId,
    sort
  );
  const Movie = data?.pages?.reduce((acc, page) => {
    return [...acc, ...page.results];
  }, []);

  const SelectHandler = (selectedItem, action) => {
    if (action.name === 'genres') {
      let items = selectedItem.map((item) => item.id);
      setGenresId(items);
    }
    if (action.name === 'sortby') {
      setSort(selectedItem?.value)
    }
  };
  return (
    <div className="w-full h-full px-5 py-5 bg-gray-900">
      <div className="pb-10 md:flex md:justify-between items-center">
        <h1 className="md:font-semibold md:text-3xl font-medium text-xl text-white">
          {mediaType === 'movie' ? 'Explore Movies' : 'Explore Tv Shows'}
        </h1>
        <div className='md:flex md:items-center md:gap-5'>
          <Select
            isMulti
            name="genres"
            closeMenuOnSelect={false}
            options={genres?.genres}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            onChange={SelectHandler}
            placeholder="Select Genres"
            className="w-full mt-5 md:mt-0"
          />
          <Select
            name="sortby"
            options={sortbyData}
            isClearable={false}
            placeholder="Sort By"
            onChange={SelectHandler}
            className='w-full mt-5 md:mt-0'
          />
        </div>
      </div>
      {Movie?.length > 0 ? (
        <InfiniteScroll
          dataLength={Movie ? Movie.length : 0}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
          loader={<p>Loading...</p>}
        >
          <ItemGrid datas={Movie} mediaType={mediaType} />
        </InfiniteScroll>
      ) : (
        <p className="text-white opacity-50 h-screen">
          Sorry, Results not found!
        </p>
      )}
    </div>
  );
}
