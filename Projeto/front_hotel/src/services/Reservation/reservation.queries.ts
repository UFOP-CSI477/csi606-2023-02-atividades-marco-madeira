import { getAllReservationByUserId } from "@/services/Reservation/reservation.service";
import { useQuery } from "react-query";

export function useGetAllReservationByUserId(user_email: string) {
  return useQuery(["getAllReservationByUserId", user_email], () =>
    getAllReservationByUserId(user_email)
  );
}
