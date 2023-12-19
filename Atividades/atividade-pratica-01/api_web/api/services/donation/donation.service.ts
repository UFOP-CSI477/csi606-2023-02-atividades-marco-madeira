import { Donation } from "@prisma/client";
import { db } from "../../database";

export async function createDonation(donation: Donation): Promise<Donation> {
  return await db.donation.create({
    data: donation,
  });
}

export async function getAll(): Promise<Donation[]> {
  return await db.donation.findMany();
}

export async function deleteDonation(donation_id: number): Promise<void> {
  await db.donation.delete({
    where: {
      id: donation_id,
    },
  });
}

export async function updateDonation(donation_id: number, donation: Donation): Promise<void> {
  await db.donation.update({
    where: { id: donation_id },
    data: donation,
  });
}
