import { useInfiniteQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export default function useGetExplore(mediaType) {
  return useInfiniteQuery({
    queryKey: [mediaType],
    queryFn: async ({ pageParam = 1 }) => {
      const data = api.getDiscoverMedia(mediaType, pageParam);
      return data;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.page + 1 > lastPage.total_pages) {
        return false;
      } else {
        return lastPage.page + 1;
      }
    },
  });
}
