import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export default function useGetDetail(mediaType, id) {
  return useQuery({
    queryKey: [mediaType, id],
    queryFn: async () => {
      const data = api.getDetailMedia(mediaType, id);
      return data;
    },
  });
}
