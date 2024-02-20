import { createState, removeState } from "@/service/State/state.service";
import { useMutation } from "react-query";

export function useCreateState() {
  return useMutation(createState, {
    onSuccess: () => console.log("Deu certo!"),
  });
}

export function useRemoveState() {
  return useMutation(removeState, {
    onSuccess: () => console.log("Deu certo!"),
  });
}
