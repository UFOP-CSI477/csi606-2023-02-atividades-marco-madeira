import { BloodType } from "@prisma/client";
import { db } from "../../database";

export async function createBloodType(bloodType: BloodType): Promise<BloodType> {
  return await db.bloodType.create({
    data: bloodType,
  });
}

export async function getAll(): Promise<BloodType[]> {
  return await db.bloodType.findMany();
}

export async function deleteBloodType(bloodType_id: number): Promise<void> {
  await db.bloodType.delete({
    where: {
      id: bloodType_id,
    },
  });
}

export async function updateBloodType(bloodType_id: number, bloodType: BloodType): Promise<void> {
  await db.bloodType.update({
    where: { id: bloodType_id },
    data: bloodType,
  });
}
