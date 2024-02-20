'use client';

import {
  useCreateBloodType,
  useRemoveBloodType,
  useUpdateBloodType,
} from "@/service/BloodType/blood_type.mutations";
import { CreateBloodTypeDTO, UpdateBloodTypeDTO } from "@/types/BloodType/BloodType";
import { useState } from "react";

export default function BloodTypePage() {

  const { mutate: create } = useCreateBloodType();
  const { mutate: update } = useUpdateBloodType();
  const { mutate: remove } = useRemoveBloodType();

  const [createBloodType, setCreateBloodType] = useState<CreateBloodTypeDTO>({
    type: "",
    factor: "",
  });

  const [updateBloodType, setUpdateBloodType] = useState<UpdateBloodTypeDTO>({
    id: 0,
    type: "",
    factor:"",
    updated_at: new Date()
  });

  const [removeId, setRemoveId] = useState(0);

  return (
    <div className="w-1/2 self-center justify-center border-s-white border-2 p-4 flex flex-col gap-y-6">
      <div className="gap-y-3 flex flex-col">
        <p className="text-3xl">Adicionar tipo de sangue</p>
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Type"
          onChange={(e) => setCreateBloodType({ ...createBloodType, type: e.currentTarget.value })}
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Factor"
          onChange={(e) => setCreateBloodType({ ...createBloodType, factor: e.currentTarget.value })}
        />
        <button
          className={`p-2 bg-green-600 hover:bg-green-900 ease-in-out w-1/3 self-end`}
          onClick={() => create(createBloodType)}
        >
          Criar tipo de sangue
        </button>
      </div>

      <div className="gap-y-3 flex flex-col">
        <p className="text-3xl">Editar tipo de sangue</p>
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Id"
          onChange={(e) => setUpdateBloodType({ ...updateBloodType, id: Number(e.currentTarget.value)})}
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Factor"
          onChange={(e) => setUpdateBloodType({ ...updateBloodType, factor: e.currentTarget.value })}
        />
         <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Type"
          onChange={(e) => setUpdateBloodType({ ...updateBloodType, type: e.currentTarget.value })}
        />
        <button
          className={`p-2 bg-green-600 hover:bg-green-900 ease-in-out w-1/3 self-end`}
          onClick={() => update(updateBloodType)}
        >
          Editar tipo de sangue
        </button>
      </div>

      <div className="gap-y-3 flex flex-col">
        <p className="text-3xl">Remover tipo de sangue</p>
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Id"
          onChange={(e) => setRemoveId(Number(e.currentTarget.value))}
        />
        <button
          className={`p-2 bg-green-600 hover:bg-green-900 ease-in-out w-1/3 self-end`}
          onClick={() => remove(removeId)}
        >
          Remover tipo de sangue
        </button>
      </div>
    </div>
  );
}
