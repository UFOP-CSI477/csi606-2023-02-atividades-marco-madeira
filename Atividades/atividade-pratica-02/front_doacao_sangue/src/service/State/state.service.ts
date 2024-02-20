import { api } from "@/network";
import { CreateStateDTO, State, UpdateStateDTO } from "@/types/State/State";

const base_url = "/state";

export async function getAllState(): Promise<State[]> {
  const response = await api.get<State[]>(base_url + "/all");
  return response.data;
}

export async function createState(new_state: CreateStateDTO): Promise<State> {
  const response = await api.post<State>(base_url + "/create", new_state);
  return response.data;
}

export async function updateState(
  updated_state: UpdateStateDTO,
  id: number
): Promise<void> {
  const response = await api.patch<void>(
    base_url + `/update/${id}`,
    updated_state
  );
  return response.data;
}

export async function removeState(id: number): Promise<void> {
  const response = await api.delete<void>(base_url + `/remove/${id}`);
  return response.data;
}
