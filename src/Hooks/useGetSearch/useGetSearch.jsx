import { useInfiniteQuery } from '@tanstack/react-query';
import api from '../../utils/api';

export default function useGetSearch(query) {
  return useInfiniteQuery({
    queryKey: ["Search", query],
    queryFn: async ({ pageParam = 1 }) => {
      const data = api.getSearchMedia(query, pageParam);
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
