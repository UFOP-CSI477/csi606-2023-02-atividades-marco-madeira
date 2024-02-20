import {
  createDonation,
  removeDonation,
} from "@/service/Donation/donation.service";
import { useMutation } from "react-query";

export function useCreateDonation() {
  return useMutation(createDonation, {
    onSuccess: () => console.log("Deu certo!"),
  });
}

export function useRemoveDonation() {
  return useMutation(removeDonation, {
    onSuccess: () => console.log("Deu certo!"),
  });
}
