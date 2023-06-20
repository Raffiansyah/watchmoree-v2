import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export default function useGetCredits(mediaType, id) {
  return useQuery({
    queryKey: ["Credit", mediaType, id],
    queryFn: async () => {
      const data = api.getCreditsMedia(mediaType, id);
      return data;
    },
  });
}
