import { DonationPoint } from "@prisma/client";
import { db } from "../../database";

export async function createDonationPoint(donationPoint: DonationPoint): Promise<DonationPoint> {
  return await db.donationPoint.create({
    data: donationPoint,
  });
}

export async function getAll(): Promise<DonationPoint[]> {
  return await db.donationPoint.findMany();
}

export async function deleteDonationPoint(donationPoint_id: number): Promise<void> {
  await db.donationPoint.delete({
    where: {
      id: donationPoint_id,
    },
  });
}

export async function updateDonationPoint(donationPoint_id: number, donationPoint: DonationPoint): Promise<void> {
  await db.donationPoint.update({
    where: { id: donationPoint_id },
    data: donationPoint,
  });
}
