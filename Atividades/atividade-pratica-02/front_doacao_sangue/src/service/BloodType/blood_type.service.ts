import { api } from "@/network";
import {
  BloodType,
  CreateBloodTypeDTO,
  UpdateBloodTypeDTO,
} from "@/types/BloodType/BloodType";

const base_url = "/bloodType";

export async function getAllBloodType(): Promise<BloodType[]> {
  const response = await api.get<BloodType[]>(base_url + "/all");
  return response.data;
}

export async function createBloodType(
  new_blood_type: CreateBloodTypeDTO
): Promise<BloodType> {
  const response = await api.post<BloodType>(
    base_url + "/create",
    new_blood_type
  );
  return response.data;
}

export async function updateBloodType(
  updated_blood_type: UpdateBloodTypeDTO
): Promise<void> {
  const response = await api.patch<void>(
    base_url + `/update/${updated_blood_type.id}`,
    updated_blood_type
  );
  return response.data;
}

export async function removeBloodType(id: number): Promise<void> {
  const response = await api.delete<void>(base_url + `/remove/${id}`);
  return response.data;
}
