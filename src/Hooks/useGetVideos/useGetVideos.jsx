import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export default function useGetVideos(mediaType, id) {
  return useQuery({
    queryKey: ['Videos', mediaType, id],
    queryFn: async () => {
      const data = api.getVideosMedia(mediaType, id);
      return data;
    },
  });
}
