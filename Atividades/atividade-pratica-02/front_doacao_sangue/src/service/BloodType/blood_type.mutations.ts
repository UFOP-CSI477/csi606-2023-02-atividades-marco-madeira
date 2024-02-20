import {
  createBloodType,
  removeBloodType,
  updateBloodType,
} from "@/service/BloodType/blood_type.service";
import { UpdateBloodTypeDTO } from "@/types/BloodType/BloodType";
import { useMutation } from "react-query";

export function useCreateBloodType() {
  return useMutation(createBloodType, {
    onSuccess: () => console.log("Deu certo!"),
  });
}

export function useUpdateBloodType(
  updated_blood_type: UpdateBloodTypeDTO,
  id: number
) {
  return useMutation(() => updateBloodType(updated_blood_type, id), {
    onSuccess: () => console.log("Deu certo!"),
  });
}

export function useRemoveBloodType() {
  return useMutation(removeBloodType, {
    onSuccess: () => console.log("Deu certo!"),
  });
}
