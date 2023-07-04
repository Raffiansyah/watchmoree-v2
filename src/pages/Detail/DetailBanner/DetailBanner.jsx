import PropTypes from 'prop-types';
import Img from '../../../components/LazyLoad/Img';
import api from '../../../utils/api';
import CircleRating from '../../../components/CircleRating/CircleRating';
import { formattedTime } from '../../../utils/formatedTime';
import { showFormattedDate } from '../../../utils/formatedDate';

export default function DetailBanner({ details, isLoading, credits }) {
  const Directors = credits?.crew?.filter((crew) => crew.job === 'Director');
  const Writers = credits?.crew?.filter(
    (crew) =>
      crew.job === 'Screenplay' || crew.job === 'Story' || crew.job === 'Writer'
  );
  return (
    !isLoading && (
      <div className="relative flex text-white">
        <Img
          src={`${api.ORIGINAL_IMG}${details?.backdrop_path}`}
          alt="Banner"
          className="object-cover h-screen md:h-[770px]"
        />
        <div className="w-full h-screen md:h-[770px] bg-gray-900 absolute opacity-80"></div>
        <div className="absolute flex md:flex-row flex-col p-5 md:py-20 md:px-28 md:gap-10">
          <div className="md:w-96">
            <Img
              src={`${api.W500_IMG}${details?.poster_path}`}
              alt={details?.title || details?.name}
              className="rounded-2xl object-cover h-screen"
            />
          </div>
          <div className="max-w-xl">
            <h1 className="text-4xl">{details?.title || details?.name}</h1>
            <p className="text-lg mb-3 italic opacity-50">{details?.tagline}</p>
            <div className="flex gap-2 mb-8">
              {details?.genres.map((genre) => (
                <p
                  key={genre?.id}
                  className="bg-blue-600 px-[5px] py-[3px] text-xs rounded-md"
                >
                  {genre?.name}
                </p>
              ))}
            </div>
            <CircleRating
              textColor={'white'}
              rating={details?.vote_average?.toFixed(1)}
              customClass={
                'md:w-[100px] w-[70px] bg-gray-900 rounded-full p-1 text-white'
              }
            />
            <div className="mt-8">
              <h1 className="text-2xl mb-2">Overview</h1>
              <p>{details?.overview}</p>
            </div>
            <div className="flex py-3 mt-5 gap-3 border-b-[1px] border-slate-500 border-opacity-80">
              <div>
                <span className="font-bold">Status: </span>
                <span className="opacity-50">{details?.status}</span>
              </div>
              <div>
                <span className="font-bold">Release Date: </span>
                <span className="opacity-50">
                  {showFormattedDate(details?.release_date)}
                </span>
              </div>
              <div>
                <span className="font-bold">Runtime: </span>
                <span className="opacity-50">
                  {formattedTime(details?.runtime)}
                </span>
              </div>
            </div>
            <div className="flex py-3 mt-5 gap-3 border-b-[1px] border-slate-500 border-opacity-80">
              <div>
                <span className="font-bold">Director: </span>
                {Directors?.map((director, i) => (
                  <span className="opacity-50" key={i}>
                    {director.name}
                    {director.length - 1 !== i && ', '}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex py-3 mt-5 gap-3 border-b-[1px] border-slate-500 border-opacity-80">
              <div>
                <span className="font-bold">Writer: </span>
                {Writers?.map((writer, i) => (
                  <span className="opacity-50" key={i}>
                    {writer.name}
                    {writer.length - 1 !== i && ', '}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

DetailBanner.propTypes = {
  details: PropTypes.object,
  isLoading: PropTypes.bool,
  credits: PropTypes.object,
};
