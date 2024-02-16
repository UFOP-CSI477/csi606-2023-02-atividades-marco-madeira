import { createReservation } from "@/services/Reservation/reservation.service";
import { useMutation } from "react-query";

export function useCreateReservation() {
  return useMutation(createReservation, {
    onSuccess: () => console.log("Deu certo!"),
  });
}
