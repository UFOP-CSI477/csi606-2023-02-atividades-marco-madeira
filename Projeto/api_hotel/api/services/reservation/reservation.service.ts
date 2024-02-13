import { Reservation } from "@prisma/client";
import { db } from "../../database/server";

export async function createReservation(new_reservation: Reservation): Promise<void> {
    await db.reservation.create({
        data: new_reservation
    })
}