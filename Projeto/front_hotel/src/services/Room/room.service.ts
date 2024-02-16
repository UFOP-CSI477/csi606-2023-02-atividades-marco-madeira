import { api } from "@/network";
import { CreateRoomDTO } from "@/types/Room/CreateRoomDTO";
import { Room } from "@/types/Room/Room";

const base_url = "/room";

export async function getRoomById(room_id: number): Promise<Room> {
  const response = await api.get<Room>(base_url + `/getRoomById/${room_id}`);
  return response.data;
}

export async function createRoom(room: CreateRoomDTO): Promise<Room>{
  const response = await api.post<Room>(base_url+ `/createRoom`, room)
  return response.data;
}
