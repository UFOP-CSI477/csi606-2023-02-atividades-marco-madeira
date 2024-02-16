"use client";

import { useGetHotelById } from "@/services/Hotel/hotel.queries";
import { useCreateReservation } from "@/services/Reservation/reservation.mutates";
import { CreateReservationDTO } from "@/types/Reservation/CreateReservationDTO";
import { dateToEpoch, daysInEpochs } from "@/utils/dateConvert";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ReservationPage() {

  const path = usePathname();
  const hotelId = path.split("/").pop()

  const { data: hotel } = useGetHotelById(Number(hotelId));

  const { mutate: createReservation } = useCreateReservation();

  const [reservation, setReservation] = useState<CreateReservationDTO>({
    value: 300,
    check_in: "",
    check_out: "",
    user_id: "user@user.com",
    room_id: 1,
  });

  const handleSubmitReservation = () => {
    createReservation(reservation);
  };

  const handleSetDates = (date: string, isCheckIn: boolean) => {
    const new_date = dateToEpoch(date);

    if (isCheckIn) {
      setReservation({
        ...reservation,
        check_in: new_date,
        value:
          daysInEpochs(parseInt(reservation.check_out), parseInt(new_date)) *
          300,
      });
    } else {
      setReservation({
        ...reservation,
        check_out: new_date,
        value:
          daysInEpochs(parseInt(new_date), parseInt(reservation.check_in)) *
          300,
      });
    }
  };

  return (
    hotel && (
      <div>
        <h1 className="text-2xl">{hotel.name}</h1>
        <div className="flex flex-row gap-x-10 mt-6">
          <div className="w-1/2">
            <img src="Italia.jpeg" className="w-full"/>
          </div>
          <div className="border-solid border-r-2 border-white" />
          <div className=" w-1/2">
            <p className="text-3xl">{hotel.description}</p>
          </div>
        </div>

        <div className="border-solid border-b-2 border-white my-20" />

        <div className="flex flex-row gap-x-10 ">
          <div className=" w-1/2 flex flex-col gap-y-8">
            <div>
              <p className="text-3xl">Preço:</p>
              <p className="text-xl">$300</p>
            </div>

            <div>
              <p className="text-3xl">Capacidade:</p>
              <p className="text-xl">2 pessoas</p>
            </div>

            <div>
              <p className="text-3xl">Address:</p>
              <p className="text-xl">{hotel.address}</p>
            </div>
          </div>
          <div className="border-solid border-r-2 border-white" />
          <div className="w-1/2 self-center justify-center">
            <div className="gap-x-3 flex">
              <input
                type="date"
                className="bg-transparent p-2 border-s-white border-2"
                placeholder="Check-In"
                onChange={(e) => handleSetDates(e.target.value, true)}
              />
              <input
                type="date"
                className="bg-transparent p-2 border-s-white border-2"
                placeholder="Check-Out"
                onChange={(e) => handleSetDates(e.target.value, false)}
              />
            </div>
            <div className="flex flex-grow justify-between items-center">
              <p className="text-3xl">Final price: ${reservation.value}</p>
              <button
                className={`p-4 bg-green-600 hover:bg-green-900 ease-in-out ${
                  reservation.check_in === "" || reservation.check_out === ""
                    ? "disabled:bg-gray-400"
                    : ""
                }`}
                onClick={handleSubmitReservation}
                disabled={
                  reservation.check_in === "" || reservation.check_out === ""
                }
              >
                Start the experience
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
