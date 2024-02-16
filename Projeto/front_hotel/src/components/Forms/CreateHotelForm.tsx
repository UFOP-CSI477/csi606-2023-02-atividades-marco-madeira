"use client";

import { useCreateHotel } from "@/services/Hotel/hotel.mutations";
import { CreateHotelDTO } from "@/types/Hotel/CreateHotelDTO";
import { useState } from "react";

export default function CreateHotelForm() {
  const [hotel, setHotel] = useState<CreateHotelDTO>({
    name: "",
    category: "",
    address: "",
    description: "",
  });

  const { mutate: createHotel } = useCreateHotel();

  return (
    <div className="w-1/2 self-center justify-center border-s-white border-2 p-4">
      <div className="gap-y-3 flex flex-col">
        <p className="text-3xl">Add Hotel Form</p>
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Name"
          onChange={(e) => setHotel({ ...hotel, name: e.currentTarget.value })}
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Category"
          onChange={(e) =>
            setHotel({ ...hotel, category: e.currentTarget.value })
          }
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Description"
          onChange={(e) =>
            setHotel({ ...hotel, description: e.currentTarget.value })
          }
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Address"
          onChange={(e) =>
            setHotel({ ...hotel, address: e.currentTarget.value })
          }
        />
        <button
          className={`p-2 bg-green-600 hover:bg-green-900 ease-in-out w-1/3 self-end`}
          onClick={() => createHotel(hotel)}
        >
          Create Hotel
        </button>
      </div>
    </div>
  );
}
