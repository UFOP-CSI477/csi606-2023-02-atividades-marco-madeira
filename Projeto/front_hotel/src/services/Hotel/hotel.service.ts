import { api } from "@/network";
import { Hotel } from "@/types/Hotel/Hotel";

const base_url = "/hotel"

export async function getHotelById(id: number): Promise<Hotel> {
  const response = await api.get<Hotel>(base_url + `/getHotelById/${id}`);
  return response.data;
}

export async function getHotelByCategory(category: string): Promise<Hotel[]> {
  const response = await api.get<Hotel[]>(base_url + `/getHotelByCategory/${category}`);
  return response.data;
}
