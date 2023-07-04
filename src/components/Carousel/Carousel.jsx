import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../utils/api';
import { showFormattedDate } from '../../utils/formatedDate';
import CircleRating from '../CircleRating/CircleRating';
import Img from '../LazyLoad/Img';

export default function Carousel({ datas, isLoading, endPoint }) {
  return (
    <div className="py-10">
      <Swiper
        navigation
        breakpoints={{
          375: {
            spaceBetween: 8,
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 15,
            slidesPerView: 5,
          },
        }}
      >
        {!isLoading && (
          <>
            {datas?.map((data) => (
              <SwiperSlide key={data.id}>
                <Link to={`/${data.media_type || endPoint}/${data.id}`}>
                  <div className="relative">
                    <Img
                      src={`${api.W500_IMG}${data.poster_path}`}
                      alt={data.title}
                      className="rounded-2xl"
                    />
                    <CircleRating
                      textColor={"black"}
                      rating={data.vote_average.toFixed(1)}
                      customClass={
                        'md:w-[55px] w-[45px] bg-white rounded-full p-1 absolute -bottom-2 left-2 font-bold'
                      }
                    />
                  </div>
                  <div className="py-5 text-white">
                    <p className="md:text-xl text-lg font-bold overflow-hidden text-ellipsis whitespace-nowrap w-36 md:w-52">
                      {data.title || data.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {showFormattedDate(
                        data.release_date || data.first_air_date
                      )}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </div>
  );
}
Carousel.propTypes = {
  datas: PropTypes.array,
  endPoint: PropTypes.string,
  isLoading: PropTypes.bool,
};
