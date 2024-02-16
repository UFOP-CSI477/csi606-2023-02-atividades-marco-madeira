'use client'

import { useCreateRoom } from "@/services/Room/room.mutations";
import { CreateRoomDTO } from "@/types/Room/CreateRoomDTO";
import { useState } from "react";

export default function CreateRoomForm() {
  const [room, setRoom] = useState<CreateRoomDTO>({
    number: 0,
    value: 0,
    capacity: 0,
    hotel_id: 0,
  });

  const {mutate: createRoom} = useCreateRoom();

  return (
    <div className="w-1/2 self-center justify-center border-s-white border-2 p-4">
      <div className="gap-y-3 flex flex-col">
        <p className="text-3xl">Add Room Form</p>
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Number"
          onChange={(e) => setRoom({ ...room, number: Number(e.currentTarget.value)})}
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Value"
          onChange={(e) =>
            setRoom({ ...room, value: Number(e.currentTarget.value)})
          }
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Capacity"
          onChange={(e) =>
            setRoom({ ...room, capacity: Number(e.currentTarget.value)})
          }
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Hotel Id"
          onChange={(e) =>
            setRoom({ ...room, hotel_id: Number(e.currentTarget.value)})
          }
        />
        <button
          className={`p-2 bg-green-600 hover:bg-green-900 ease-in-out w-1/3 self-end`}
          onClick={()=> createRoom(room)}
        >
          Create Room
        </button>
      </div>
    </div>
  );
}
