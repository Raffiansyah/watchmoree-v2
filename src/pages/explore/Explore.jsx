import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import api from '../../utils/api';
import ItemGrid from '../../components/ItemGrid/ItemGrid';
import useGetExplore from '../../Hooks/useGetExplore/useGetExplore';

export default function Explore() {
  const { mediaType } = useParams();
  const { data, hasNextPage, fetchNextPage } = useGetExplore(mediaType)
  const Movie = data?.pages?.reduce((acc, page) => {
    return [...acc, ...page.results];
  }, []);
  return (
    <div className="w-full h-full px-5 py-5 bg-gray-900">
      <div className="pb-10">
        <h1 className="md:font-semibold md:text-3xl font-medium text-xl text-white">
          {mediaType === 'movie' ? 'Explore Movies' : 'Explore Tv Shows'}
        </h1>
      </div>
      <InfiniteScroll
        dataLength={Movie ? Movie.length : 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<p>Loading...</p>}
      >
        <ItemGrid datas={Movie} mediaType={mediaType} />
      </InfiniteScroll>
    </div>
  );
}
