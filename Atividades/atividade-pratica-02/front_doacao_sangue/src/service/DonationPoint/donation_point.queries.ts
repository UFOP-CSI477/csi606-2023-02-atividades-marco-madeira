import { getAllDonationPoint } from "@/service/DonationPoint/donation_point.service";
import { useQuery } from "react-query";

export function useGetAllDonationPoint() {
  return useQuery(["getAllDonationPoint"], () => getAllDonationPoint());
}
