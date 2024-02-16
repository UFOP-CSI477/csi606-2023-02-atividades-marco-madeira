import { createRoom } from "@/services/Room/room.service";
import { useMutation } from "react-query";

export function useCreateRoom() {
    return useMutation(createRoom, {
      onSuccess: () => console.log("Deu certo!"),
    });
  }