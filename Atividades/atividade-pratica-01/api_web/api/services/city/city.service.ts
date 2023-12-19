import { City } from "@prisma/client";
import { db } from "../../database";

export async function createCity(city: City): Promise<City> {
  return await db.city.create({
    data: city,
  });
}

export async function getAll(): Promise<City[]> {
  return await db.city.findMany();
}

export async function deleteCity(city_id: number): Promise<void> {
  await db.city.delete({
    where: {
      id: city_id,
    },
  });
}

export async function updateCity(city_id: number, city: City): Promise<void> {
  await db.city.update({
    where: { id: city_id },
    data: city,
  });
}
