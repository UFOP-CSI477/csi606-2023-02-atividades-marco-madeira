'use client';

import {
  useCreatePerson,
  useRemovePerson,
} from "@/service/Person/person.mutations";
import { CreatePersonDTO } from "@/types/Person/Person";
import { useState } from "react";

export default function PersonPage() {
  const { mutate: create } = useCreatePerson();
  //   const { mutate: update } =;
  const { mutate: remove } = useRemovePerson();

  const [createPerson, setCreatePerson] = useState<CreatePersonDTO>({
    name: "",
    street: "",
    number: "",
    additional: "",
    rg: "",
    city_id: 0,
    blood_type_id: 0,
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
        <p className="text-3xl">Adicionar pessoa</p>
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Name"
          onChange={(e) =>
            setCreatePerson({
              ...createPerson,
              name: e.currentTarget.value,
            })
          }
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Street"
          onChange={(e) =>
            setCreatePerson({
              ...createPerson,
              street: e.currentTarget.value,
            })
          }
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Number"
          onChange={(e) =>
            setCreatePerson({
              ...createPerson,
              number: e.currentTarget.value,
            })
          }
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Additional"
          onChange={(e) =>
            setCreatePerson({
              ...createPerson,
              additional: e.currentTarget.value,
            })
          }
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Rg"
          onChange={(e) =>
            setCreatePerson({
              ...createPerson,
              rg: e.currentTarget.value,
            })
          }
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="City_Id"
          onChange={(e) =>
            setCreatePerson({
              ...createPerson,
              city_id: Number(e.currentTarget.value),
            })
          }
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Blood_Type_Id"
          onChange={(e) =>
            setCreatePerson({
              ...createPerson,
              blood_type_id: Number(e.currentTarget.value),
            })
          }
        />
        <button
          className={`p-2 bg-green-600 hover:bg-green-900 ease-in-out w-1/3 self-end`}
          onClick={() => create(createPerson)}
        >
          Criar pessoa
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
        <p className="text-3xl">Remover pessoa</p>
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
          Remover pessoa
        </button>
      </div>
    </div>
  );
}
