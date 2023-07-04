import { useInfiniteQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export default function useGetExplore(mediaType, genresId, sort) {
  return useInfiniteQuery({
    queryKey: ["Explore", mediaType, genresId, sort],
    queryFn: async ({ pageParam = 1 }) => {
      const data = api.getDiscoverMedia(mediaType, pageParam, genresId, sort);
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
