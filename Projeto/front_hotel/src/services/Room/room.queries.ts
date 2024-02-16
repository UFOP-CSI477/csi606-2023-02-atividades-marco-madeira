import { getRoomById } from "@/services/Room/room.service";
import { useQuery } from "react-query";

export function useGetRoomById(room_id: number) {
  return useQuery(["getRoomById", room_id], () => getRoomById(room_id));
}
