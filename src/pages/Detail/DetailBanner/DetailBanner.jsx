import React from 'react';
import PropTypes from 'prop-types';
import useGetDetail from '../../../Hooks/useGetDetail/useGetDetail';
import Img from '../../../components/LazyLoad/Img';
import api from '../../../utils/api';
import CircleRating from '../../../components/CircleRating/CircleRating';
import useGetCredits from '../../../Hooks/useGetCredits/useGetCredits';

export default function DetailBanner({ mediaType, id }) {
  const { data, isLoading } = useGetDetail(mediaType, id);
  const credit = useGetCredits(mediaType, id);
  console.log(credit.data);
  return (
    !isLoading && (
      <div className="relative flex text-white">
        <Img
          src={`${api.ORIGINAL_IMG}${data?.backdrop_path}`}
          alt="Banner"
          className="object-cover h-screen md:h-[770px]"
        />
        <div className="w-full h-screen md:h-[770px] bg-gray-900 absolute opacity-80"></div>
        <div className="absolute flex md:py-20 md:px-28 md:gap-10">
          <div className="md:w-96">
            <Img
              src={`${api.W500_IMG}${data?.poster_path}`}
              alt={data?.title || data?.name}
              className="rounded-2xl"
            />
          </div>
          <div className='max-w-xl'>
            <h1 className="text-4xl">{data?.title || data?.name}</h1>
            <p className="text-lg mb-3 italic opacity-50">{data?.tagline}</p>
            <div className="flex gap-2 mb-8">
              {data?.genres.map((genre) => (
                <p
                  key={genre?.id}
                  className="bg-blue-600 px-[5px] py-[3px] text-xs rounded-md"
                >
                  {genre?.name}
                </p>
              ))}
            </div>
            <CircleRating
              textColor={"white"}
              rating={data?.vote_average?.toFixed(1)}
              customClass={
                'md:w-[100px] w-[70px] bg-gray-900 rounded-full p-1 text-white'
              }
            />
            <div className='mt-8'>
              <h1 className='text-2xl mb-2'>Overview</h1>
              <p>{data?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

DetailBanner.propTypes = {
  mediaType: PropTypes.string,
  id: PropTypes.string,
};
