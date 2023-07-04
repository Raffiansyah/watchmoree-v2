import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export default function useGetGenre(mediaType) {
  return useQuery({
    queryKey: ['Genre', mediaType],
    queryFn: async () => {
      const responseMedia = api.getGenresMedia(mediaType);
      return responseMedia;
    },
  });
}
