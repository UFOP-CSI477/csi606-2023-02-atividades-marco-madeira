import { api } from "@/network";
import { CreateDonationPointDTO, DonationPoint, UpdateDonationPointDTO } from "@/types/DonationPoint/DonationPoint";

const base_url = "/donationPoint";

export async function getAllDonationPoint(): Promise<DonationPoint[]> {
  const response = await api.get<DonationPoint[]>(base_url + "/all");
  return response.data;
}

export async function createDonationPoint(
  new_donation_point: CreateDonationPointDTO
): Promise<DonationPoint> {
  const response = await api.post<DonationPoint>(
    base_url + "/create",
    new_donation_point
  );
  return response.data;
}

export async function updateDonationPoint(
  updated_donation_point: UpdateDonationPointDTO,
  id: number
): Promise<void> {
  const response = await api.patch<void>(
    base_url + `/update/${id}`,
    updated_donation_point
  );
  return response.data;
}

export async function removeDonationPoint(id: number): Promise<void> {
  const response = await api.delete<void>(base_url + `/remove/${id}`);
  return response.data;
}