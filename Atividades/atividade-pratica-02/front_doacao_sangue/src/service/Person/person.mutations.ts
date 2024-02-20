import { createPerson, removePerson } from "@/service/Person/person.service";
import { useMutation } from "react-query";

export function useCreatePerson() {
  return useMutation(createPerson, {
    onSuccess: () => console.log("Deu certo!"),
  });
}

export function useRemovePerson() {
  return useMutation(removePerson, {
    onSuccess: () => console.log("Deu certo!"),
  });
}
