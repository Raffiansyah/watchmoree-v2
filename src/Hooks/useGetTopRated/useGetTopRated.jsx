import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

export default function useGetTopRated(endPoint) {
  return useQuery({
    queryKey: [endPoint],
    queryFn: async () => {
      const responseMedia = api.getTopRatedMedia(endPoint);
      return responseMedia;
    },
  });
}
