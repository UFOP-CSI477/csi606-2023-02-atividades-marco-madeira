import { api } from "@/network";
import { CreateHotelDTO } from "@/types/Hotel/CreateHotelDTO";
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

export async function createHotel(hotel: CreateHotelDTO): Promise<Hotel>{
  const response = await api.post<Hotel>(base_url+ `/createHotel`, hotel)
  return response.data;
}