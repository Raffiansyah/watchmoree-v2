import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import Img from '../../../components/LazyLoad/Img';
import api from '../../../utils/api';

export default function Cast({ datas, loading }) {
  return (
    <div className="md:p-10 p-5 text-white md:mt-0 mt-[850px]">
      <h1 className="md:mb-12 mb-7 text-2xl">Top Cast</h1>
      <div>
        <Swiper
          breakpoints={{
            375: {
              spaceBetween: 0,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 0,
              slidesPerView: 6,
            },
          }}
        >
          {!loading && (
            <>
              {datas?.map((data, i) => (
                <SwiperSlide key={i} className="flex flex-col items-center">
                  <Img
                    src={`${api.W500_IMG}${data.profile_path}`}
                    alt={data.name}
                    className={
                      'md:w-[175px] md:h-[175px] w-[125px] h-[125px] object-cover rounded-full'
                    }
                  />
                  <h1 className="font-bold">{data.name}</h1>
                  <p className="opacity-50">{data.character}</p>
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      </div>
    </div>
  );
}

Cast.propTypes = {
  datas: PropTypes.array,
  loading: PropTypes.bool,
};
