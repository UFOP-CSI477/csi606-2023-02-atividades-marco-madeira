import {
  createDonationPoint,
  removeDonationPoint,
} from "@/service/DonationPoint/donation_point.service";
import { useMutation } from "react-query";

export function useCreateDonationPoint() {
  return useMutation(createDonationPoint, {
    onSuccess: () => console.log("Deu certo!"),
  });
}

export function useRemoveDonationPoint() {
  return useMutation(removeDonationPoint, {
    onSuccess: () => console.log("Deu certo!"),
  });
}
