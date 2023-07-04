import { useState } from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import SwitchTab from '../../../components/Switchtab/Switchtab';
import useGetTrending from '../../../Hooks/useGetTrending/useGetTrending';

export default function Trending() {
  const [endPoint, setEndPoint] = useState('week');
  const { data, isLoading } = useGetTrending(endPoint);
  const onTabsChange = (data) => {
    setEndPoint(data);
  };
  return (
    <div className="md:px-24 md:py-16 px-5 py-3">
      <div className="flex justify-between">
        <span className="md:font-semibold md:text-3xl font-medium text-xl text-white">
          Trendings
        </span>
        <SwitchTab
          endpont1="week"
          endpoint2="day"
          title1="This Weeks"
          title2="Today"
          endPoint={endPoint}
          onTabsChange={onTabsChange}
        />
      </div>
      <Carousel datas={data?.results} isLoading={isLoading} />
    </div>
  );
}
