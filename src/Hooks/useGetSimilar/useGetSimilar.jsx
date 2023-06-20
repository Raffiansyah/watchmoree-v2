import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export default function useGetSimilar(mediaType, id) {
  return useQuery({
    queryKey: ["Similar", mediaType, id],
    queryFn: async () => {
      const data = api.getSimilarMedia(mediaType, id);
      return data;
    },
  });
}
