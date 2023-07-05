import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Videos({ datas, loading }) {
  const videos = datas?.results.reverse().slice(0, 10);

  return (
    <div className="md:p-10 p-5 text-white">
      <h1 className="md:mb-12 mb-7 text-2xl">Official Videos</h1>
      <Swiper
        breakpoints={{
          375: {
            spaceBetween: 0,
            slidesPerView: 1,
          },
          1024: {
            spaceBetween: 5,
            slidesPerView: 4,
          },
        }}
      >
        {!loading && (
          <>
            {videos.map((video, i) => (
              <SwiperSlide key={i}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.key}`}
                  className="rounded-xl"
                  width="100%"
                  allowFullScreen
                  title="Youtube Videos"
                />
                <h1 className="opacity-70">{video.name}</h1>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </div>
  );
}

Videos.propTypes = {
  datas: PropTypes.object,
  loading: PropTypes.bool,
};
