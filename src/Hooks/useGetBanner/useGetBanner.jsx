import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export default function useGetBanner() {
  return useQuery({
    queryKey: ['movie'],
    queryFn: async () => {
      const responseMedia = await api.getDiscoverMedia('movie');
      return responseMedia;
    },
  });
}
