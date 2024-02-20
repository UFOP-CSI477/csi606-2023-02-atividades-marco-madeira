import { api } from "@/network";
import {
  CreatePersonDTO,
  Person,
  UpdatePersonDTO,
} from "@/types/Person/Person";

const base_url = "/person";

export async function getAllPerson(): Promise<Person[]> {
  const response = await api.get<Person[]>(base_url + "/all");
  return response.data;
}

export async function createPerson(
  new_person: CreatePersonDTO
): Promise<Person> {
  const response = await api.post<Person>(base_url + "/create", new_person);
  return response.data;
}

export async function updatePerson(
  updated_person: UpdatePersonDTO,
  id: number
): Promise<void> {
  const response = await api.patch<void>(
    base_url + `/update/${id}`,
    updated_person
  );
  return response.data;
}

export async function removePerson(id: number): Promise<void> {
  const response = await api.delete<void>(base_url + `/remove/${id}`);
  return response.data;
}
