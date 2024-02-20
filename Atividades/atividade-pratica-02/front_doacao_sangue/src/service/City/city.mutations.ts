import { createCity, removeCity } from "@/service/City/city.service";
import { useMutation } from "react-query";

export function useCreateCity() {
  return useMutation(createCity, {
    onSuccess: () => console.log("Deu certo!"),
  });
}

export function useRemoveCity() {
  return useMutation(removeCity, {
    onSuccess: () => console.log("Deu certo!"),
  });
}
