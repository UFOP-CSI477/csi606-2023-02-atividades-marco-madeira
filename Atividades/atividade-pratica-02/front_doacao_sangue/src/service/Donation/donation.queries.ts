import { getAllDonation } from "@/service/Donation/donation.service";
import { useQuery } from "react-query";

export function useGetAllDonation() {
  return useQuery(["getAllDonation"], () => getAllDonation());
}
