import { getHotelById } from "@/services/Hotel/hotel.service";
import { useQuery } from "react-query";

export function useGetHotelById(hotel_id: number) {
  return useQuery(["getHotelById", hotel_id], () => getHotelById(hotel_id));
}
