'use client';

import {
  useCreateState,
  useRemoveState,
} from "@/service/State/state.mutations";
import { CreateStateDTO } from "@/types/State/State";
import { useState } from "react";

export default function PersonPage() {
  const { mutate: create } = useCreateState();
  //   const { mutate: update } =;
  const { mutate: remove } = useRemoveState();

  const [createState, setCreateState] = useState<CreateStateDTO>({
    name: "",
    acronym: "",
  });

  //   const [updateBloodType, setUpdateBloodType] = useState<UpdateBloodTypeDTO>({
  //     id: 0,
  //     type: "",
  //     factor: "",
  //     updated_at: new Date(),
  //   });

  const [removeId, setRemoveId] = useState(0);

  return (
    <div className="w-1/2 self-center justify-center border-s-white border-2 p-4 flex flex-col gap-y-6">
      <div className="gap-y-3 flex flex-col">
        <p className="text-3xl">Adicionar estados</p>
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Name"
          onChange={(e) =>
            setCreateState({
              ...createState,
              name: e.currentTarget.value,
            })
          }
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Acronym"
          onChange={(e) =>
            setCreateState({
              ...createState,
              acronym: e.currentTarget.value,
            })
          }
        />
        <button
          className={`p-2 bg-green-600 hover:bg-green-900 ease-in-out w-1/3 self-end`}
          onClick={() => create(createState)}
        >
          Criar estados
        </button>
      </div>

      {/* <div className="gap-y-3 flex flex-col">
            <p className="text-3xl">Editar tipo de sangue</p>
            <input
              type="text"
              className="bg-transparent p-2 border-s-white border-2"
              placeholder="Id"
              onChange={(e) =>
                setUpdateBloodType({
                  ...updateBloodType,
                  id: Number(e.currentTarget.value),
                })
              }
            />
            <input
              type="text"
              className="bg-transparent p-2 border-s-white border-2"
              placeholder="Factor"
              onChange={(e) =>
                setUpdateBloodType({
                  ...updateBloodType,
                  factor: e.currentTarget.value,
                })
              }
            />
            <input
              type="text"
              className="bg-transparent p-2 border-s-white border-2"
              placeholder="Type"
              onChange={(e) =>
                setUpdateBloodType({
                  ...updateBloodType,
                  type: e.currentTarget.value,
                })
              }
            />
            <button
              className={`p-2 bg-green-600 hover:bg-green-900 ease-in-out w-1/3 self-end`}
              onClick={() => create(createBloodType)}
            >
              Editar tipo de sangue
            </button>
          </div> */}

      <div className="gap-y-3 flex flex-col">
        <p className="text-3xl">Remover estado</p>
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
          Remover estado
        </button>
      </div>
    </div>
  );
}
