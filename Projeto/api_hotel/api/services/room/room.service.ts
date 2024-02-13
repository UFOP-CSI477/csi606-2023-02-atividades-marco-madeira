import { Room } from "@prisma/client";
import { db } from "../../database/server";

export async function createRoom(new_room: Room): Promise<void> {
       await db.room.create({
        data: new_room
       })   
}

export async function updateRoom(room_id: number, room: Room): Promise<void> {
    await db.room.update({
        data: room,
        where:{
            id: room_id
        }
    })
}