import { api } from "@/network";
import { CreateReservationDTO } from "@/types/Reservation/CreateReservationDTO";
import { Reservation } from "@/types/Reservation/Reservation";

const base_url = "/reservation";

export async function getAllReservationByUserId(
  email: string
): Promise<Reservation[]> {
  const response = await api.get<Reservation[]>(
    base_url + `/getAllReservationByUserId/${email}`
  );
  return response.data;
}

export async function createReservation(
  reservation: CreateReservationDTO
): Promise<Reservation> {
  const response = await api.post<Reservation>(
    base_url + `/createReservation/`,
    reservation
  );
  return response.data;
}
