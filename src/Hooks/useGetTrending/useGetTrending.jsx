import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export default function useGetTrending(endPoint) {
  return useQuery({
    queryKey: [endPoint],
    queryFn: async () => {
      const responseMedia = api.getTrendingMovie(endPoint);
      return responseMedia;
    },
  });
}
