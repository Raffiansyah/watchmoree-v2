import { useParams } from 'react-router-dom';
import DetailBanner from './DetailBanner/DetailBanner';
import useGetCredits from '../../Hooks/useGetCredits/useGetCredits';
import Cast from './Cast/Cast';
import Rekomendation from './Rekomendation/Rekomendation';
import Similar from './Similar/Similar';
import useGetDetail from '../../Hooks/useGetDetail/useGetDetail';
import useGetVideos from '../../Hooks/useGetVideos/useGetVideos';
import Videos from './Videos/Videos';

export default function Detail() {
  const { mediaType, id } = useParams();
  const { data: credits, isLoading: creditsLoading } = useGetCredits(
    mediaType,
    id
  );
  const { data: details, isLoading: detailsLoading } = useGetDetail(
    mediaType,
    id
  );
  const { data: videos, isLoading: videosLoading } = useGetVideos(
    mediaType,
    id
  );
  return (
    <div className="bg-gray-900 relative">
      <DetailBanner
        credits={credits}
        details={details}
        isLoading={detailsLoading}
      />
      <Cast datas={credits?.cast} loading={creditsLoading} />
      <Videos datas={videos} loading={videosLoading} />
      <Similar
        mediaType={mediaType}
        id={id}
        title={details?.name || details?.title}
      />
      <Rekomendation
        mediaType={mediaType}
        id={id}
        title={details?.name || details?.title}
      />
    </div>
  );
}
