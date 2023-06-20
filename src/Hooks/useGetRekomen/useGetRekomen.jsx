import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export default function useGetRekomen(mediaType, id) {
  return useQuery({
    queryKey: ["Rekomend", mediaType, id],
    queryFn: async () => {
      const data = api.getRekomenMedia(mediaType, id);
      return data;
    },
  });
}
