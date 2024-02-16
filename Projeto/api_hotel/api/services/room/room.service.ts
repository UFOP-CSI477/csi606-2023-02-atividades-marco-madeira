import { Room } from "@prisma/client";
import { db } from "../../database/server";

export async function getRoomById(room_id: number): Promise<Room|null> {
    return await db.room.findUnique({
        where: {
            id: room_id
        }
    })
}

export async function createRoom(new_room: Room): Promise<Room> {
  const result = await db.room.create({
    data: new_room,
  });
  return result;
}

export async function updateRoom(room_id: number, room: Room): Promise<void> {
  await db.room.update({
    data: room,
    where: {
      id: room_id,
    },
  });
}

export async function deleteRoom(room_id: number): Promise<void> {
    await db.room.delete({
        where:{
            id: room_id
        }
    })
}
