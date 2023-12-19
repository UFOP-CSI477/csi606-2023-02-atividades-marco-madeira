import { Person } from "@prisma/client";
import { db } from "../../database";

export async function createPerson(person: Person): Promise<Person> {
  return await db.person.create({
    data: person,
  });
}

export async function getAll(): Promise<Person[]> {
    return await db.person.findMany();
  }
  
export async function deletePerson(person_id: number): Promise<void> {
  await db.person.delete({
    where: {
      id: person_id,
    },
  });
}

export async function updatePerson(
  person_id: number,
  person: Person
): Promise<void> {
  await db.state.update({
    where: { id: person_id },
    data: person,
  });
}
