import PropTypes from 'prop-types';
import useGetRekomen from '../../../Hooks/useGetRekomen/useGetRekomen';
import Carousel from '../../../components/Carousel/Carousel';

export default function Rekomendation({ mediaType, id, title }) {
  const { data, isLoading } = useGetRekomen(mediaType, id);
  return (
    <div className="md:px-24 md:py-10 px-5 py-3">
      <div className="flex justify-between">
        <span className="md:font-semibold md:text-3xl font-medium text-xl text-white">
          Rekomendation
        </span>
      </div>
      {data?.results?.length > 0 ? (
        <Carousel datas={data?.results} isLoading={isLoading} />
      ) : (
        <div className='text-white opacity-50'>
          {`We dont have enough data to suggest any ${mediaType} based on ${title}`}
        </div>
      )}
    </div>
  );
}

Rekomendation.propTypes = {
  mediaType: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};
