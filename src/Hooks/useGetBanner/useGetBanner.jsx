import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export default function useGetBanner() {
  return useQuery({
    queryKey: ['Banner', 'movie', 1, 16, 'popularity.desc'],
    queryFn: async () => {
      const responseMedia = await api.getDiscoverMedia('movie', 1, 16, 'popularity.desc');
      return responseMedia;
    },
  });
}
