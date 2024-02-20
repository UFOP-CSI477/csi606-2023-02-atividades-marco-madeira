import { api } from "@/network";
import { City, CreateCityDTO, UpdateCityDTO } from "@/types/City/City";

const base_url = "/city";

export async function getAllCity(): Promise<City[]> {
  const response = await api.get<City[]>(base_url + "/all");
  return response.data;
}

export async function createCity(
  new_city: CreateCityDTO
): Promise<City> {
  const response = await api.post<City>(
    base_url + "/create",
    new_city
  );
  return response.data;
}

export async function updateCity(
  updated_city: UpdateCityDTO,
  id: number
): Promise<void> {
  const response = await api.patch<void>(
    base_url + `/update/${id}`,
    updated_city
  );
  return response.data;
}

export async function removeCity(id: number): Promise<void> {
  const response = await api.delete<void>(base_url + `/remove/${id}`);
  return response.data;
}