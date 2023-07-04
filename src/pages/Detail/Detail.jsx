import { useParams } from 'react-router-dom';
import DetailBanner from './DetailBanner/DetailBanner';
import useGetCredits from '../../Hooks/useGetCredits/useGetCredits';
import Cast from './Cast/Cast';
import Rekomendation from './Rekomendation/Rekomendation';
import Similar from './Similar/Similar';
import useGetDetail from '../../Hooks/useGetDetail/useGetDetail';

export default function Detail() {
  const { mediaType, id } = useParams();
  const { data: credits, isLoading: creditsLoading } = useGetCredits(
    mediaType,
    id
  );
  const { data: details, isLoading: detailtLoading } = useGetDetail(
    mediaType,
    id
  );
  return (
    <div className="bg-gray-900 relative">
      <DetailBanner
        credits={credits}
        details={details}
        isLoading={detailtLoading}
      />
      <Cast datas={credits?.cast} loading={creditsLoading} />
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
