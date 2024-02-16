"use client";

import { useGetAllReservationByUserId } from "@/services/Reservation/reservation.queries";
import { epochToDate } from "@/utils/dateConvert";

export default function AllReservations() {
  const { data: reservations } = useGetAllReservationByUserId("user@user.com");

  return (
    reservations && (
      <div className="flex flex-col gap-y-8">
        {reservations.map((res) => (
          <div className="flex flex-col gap-y-4">
            <div>
              <p className="text-4xl">Id:</p>
              <p className="text-2xl">{res.id}</p>
            </div>

            <div className="flex gap-x-8">
              <div>
                <p className="text-2xl">Check-in:</p>
                <p className="text-xl">{epochToDate(parseInt(res.check_in))}</p>
              </div>

              <div>
                <p className="text-2xl">Check-out:</p>
                <p className="text-xl">{epochToDate(parseInt(res.check_out))}</p>
              </div>
            </div>
            
            <div>
              <p className="text-2xl">Value:</p>
              <p className="text-xl">${res.value}</p>
            </div>
          </div>
        ))}
      </div>
    )
  );
}
