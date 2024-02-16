import { Reservation, Room } from "@prisma/client";
import { db } from "../../database/server";

export async function createReservation(
  new_reservation: Reservation
): Promise<Reservation> {
  const result = await db.reservation.create({
    data: new_reservation,
  });
  return result;
}

export async function getAllReservationByUserId(
  user_email: string
): Promise<Reservation[]> {
  return await db.reservation.findMany({
    where: {
      user_id: user_email,
    },
  });
}