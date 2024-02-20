import { getAllState } from "@/service/State/state.service";
import { useQuery } from "react-query";

export function useGetAllState() {
  return useQuery(["getAllState"], () => getAllState());
}
