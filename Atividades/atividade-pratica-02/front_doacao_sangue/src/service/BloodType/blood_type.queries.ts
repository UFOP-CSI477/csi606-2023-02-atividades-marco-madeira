import { getAllBloodType } from "@/service/BloodType/blood_type.service";
import { useQuery } from "react-query";

export function useGetAllBloodType() {
  return useQuery(["getAllBloodType"], () => getAllBloodType());
}
