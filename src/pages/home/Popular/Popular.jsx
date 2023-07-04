import { useState } from 'react';
import SwitchTab from '../../../components/Switchtab/Switchtab';
import Carousel from '../../../components/Carousel/Carousel';
import useGetPopular from '../../../Hooks/useGetPopular/useGetPopular';

export default function Popular() {
  const [endPoint, setEndpoint] = useState('movie');
  const { data, isLoading } = useGetPopular(endPoint);
  const onTabsChange = (data) => {
    setEndpoint(data);
  };
  return (
    <div>
      <div className="md:px-24 md:py-16 px-5 py-3">
        <div className="flex justify-between">
          <span className="md:font-semibold md:text-3xl font-medium text-xl text-white">
            Whats Popular
          </span>
          <SwitchTab
            endpont1="movie"
            endpoint2="tv"
            title1="Movies"
            title2="Tv Shows"
            endPoint={endPoint}
            onTabsChange={onTabsChange}
          />
        </div>
        <Carousel
          datas={data?.results}
          isLoading={isLoading}
          endPoint={endPoint}
        />
      </div>
    </div>
  );
}
