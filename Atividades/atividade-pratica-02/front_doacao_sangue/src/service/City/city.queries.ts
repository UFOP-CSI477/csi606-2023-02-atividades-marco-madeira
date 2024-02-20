import { getAllCity } from "@/service/City/city.service";
import { useQuery } from "react-query";

export function useGetAllCity() {
  return useQuery(["getAllCity"], () => getAllCity());
}
