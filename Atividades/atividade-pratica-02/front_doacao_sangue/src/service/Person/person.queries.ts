import { getAllPerson } from "@/service/Person/person.service";
import { useQuery } from "react-query";

export function useGetAllPerson() {
  return useQuery(["getAllPerson"], () => getAllPerson());
}
