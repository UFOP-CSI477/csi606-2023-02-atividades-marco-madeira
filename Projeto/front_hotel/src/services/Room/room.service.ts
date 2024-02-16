import { api } from "@/network";
import { Room } from "@/types/Room/Room";

const base_url = "/room";

export async function getRoomById(room_id: number): Promise<Room> {
  const response = await api.get<Room>(base_url + `/getRoomById/${room_id}`);
  return response.data;
}
