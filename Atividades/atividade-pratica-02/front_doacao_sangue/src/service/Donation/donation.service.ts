import { api } from "@/network";
import { CreateDonationDTO, Donation, UpdateDonationDTO } from "@/types/Donation/Donation";

const base_url = "/donation";

export async function getAllDonation(): Promise<Donation[]> {
  const response = await api.get<Donation[]>(base_url + "/all");
  return response.data;
}

export async function createDonation(
  new_donation: CreateDonationDTO
): Promise<Donation> {
  const response = await api.post<Donation>(
    base_url + "/create",
    new_donation
  );
  return response.data;
}

export async function updateDonation(
  updated_donation: UpdateDonationDTO,
  id: number
): Promise<void> {
  const response = await api.patch<void>(
    base_url + `/update/${id}`,
    updated_donation
  );
  return response.data;
}

export async function removeDonation(id: number): Promise<void> {
  const response = await api.delete<void>(base_url + `/remove/${id}`);
  return response.data;
}