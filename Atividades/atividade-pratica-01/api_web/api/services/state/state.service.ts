import { State } from "@prisma/client";
import { db } from "../../database";

export async function createState(state: State): Promise<State> {
  return await db.state.create({
    data: state,
  });
}

export async function getAll(): Promise<State[]> {
    return await db.state.findMany();
  }
  

export async function deleteState(state_id: number): Promise<void> {
  await db.state.delete({
    where: {
      id: state_id,
    },
  });
}

export async function updateState(
  state_id: number,
  state: State
): Promise<void> {
  await db.state.update({
    where: { id: state_id },
    data: state,
  });
}
