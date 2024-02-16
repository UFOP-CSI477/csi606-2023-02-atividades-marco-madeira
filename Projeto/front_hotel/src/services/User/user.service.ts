import { api } from "@/network";
import { User } from "@/types/User/User";

const base_url = "/user"

export async function logUser(email: string, password: string): Promise<User>{
    const response = api.get<User>(`/logUser/${email}/${password}`);
    return (await response).data;
}