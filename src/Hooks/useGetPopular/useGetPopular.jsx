import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

export default function useGetPopular(endPoint) {
  return useQuery({
    queryKey: ["Popular", endPoint],
    queryFn: async () => {
      const responseMedia = api.getPopularMedia(endPoint);
      return responseMedia;
    },
  });
}
