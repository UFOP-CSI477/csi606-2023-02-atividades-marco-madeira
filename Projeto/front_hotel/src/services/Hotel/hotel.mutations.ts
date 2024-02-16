import { createHotel } from "@/services/Hotel/hotel.service";
import { useMutation } from "react-query";

export function useCreateHotel() {
  return useMutation(createHotel, {
    onSuccess: () => console.log("Deu certo!"),
  });
}
