import { logUser } from "@/services/User/user.service";
import { useQuery } from "react-query";

export function useLogUser(email: string, password: string) {
  return useQuery(
    ["logUser", email, password],
    () => logUser(email, password),
    {
      onSuccess: () => console.log("Deu certo!"),
    }
  );
}
