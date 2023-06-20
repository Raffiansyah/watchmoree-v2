import React from 'react';
import { useParams } from 'react-router-dom';
import useGetSearch from '../../Hooks/useGetSearch/useGetSearch';
import InfiniteScroll from 'react-infinite-scroll-component';
import ItemGrid from '../../components/ItemGrid/ItemGrid';

export default function SearchResult() {
  const { query } = useParams();
  const { data, hasNextPage, fetchNextPage } = useGetSearch(query);
  const Movie = data?.pages?.reduce((acc, page) => {
    return [...acc, ...page.results];
  }, []);
  console.log();
  return (
    <div className="w-full h-full min-h-screen px-5 py-5 bg-gray-900">
      {Movie?.length > 0 ? (
        <>
          <div className="pb-10">
            <h1 className="md:font-semibold md:text-3xl font-medium text-xl text-white">
              {`Search Results of '${query}'`}
            </h1>
          </div>
          <InfiniteScroll
            dataLength={Movie ? Movie.length : 0}
            next={() => fetchNextPage()}
            hasMore={hasNextPage}
            loader={<p>Loading...</p>}
          >
            <ItemGrid datas={Movie} />
          </InfiniteScroll>
        </>
      ) : (
        <span className='text-white texr-xl'>Sorry, Results not found!</span>
      )}
    </div>
  );
}
