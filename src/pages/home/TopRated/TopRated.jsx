import React, { useState } from 'react';
import SwitchTab from '../../../components/Switchtab/Switchtab';
import Carousel from '../../../components/Carousel/Carousel';
import useGetTopRated from '../../../Hooks/useGetTopRated/useGetTopRated';

export default function TopRated() {
  const [endPoint, setEndPoint] = useState('tv');
  const { data, isLoading } = useGetTopRated(endPoint)
  const onTabsChange = (data) => {
    setEndPoint(data);
  };
  return (
    <div className="md:px-24 md:py-16 px-5 py-3">
      <div className="flex justify-between">
        <span className="md:font-semibold md:text-3xl font-medium text-xl text-white">
          Top Rated
        </span>
        <SwitchTab
          endpont1="tv"
          endpoint2="movie"
          title1="Tv Shows"
          title2="Movies"
          endPoint={endPoint}
          onTabsChange={onTabsChange}
        />
      </div>
      <Carousel datas={data?.results} isLoading={isLoading} endPoint={endPoint} />
    </div>
  );
}
