'use client';

import {
  useCreateDonationPoint,
  useRemoveDonationPoint,
} from "@/service/DonationPoint/donation_point.mutations";
import { CreateDonationPointDTO } from "@/types/DonationPoint/DonationPoint";
import { useState } from "react";

export default function DonationPage() {
  const { mutate: create } = useCreateDonationPoint();
  //   const { mutate: update } =;
  const { mutate: remove } = useRemoveDonationPoint();

  const [createDonationPoint, setCreateDonationPoint] =
    useState<CreateDonationPointDTO>({
      name: "",
      street: "",
      number: "",
      additional: "",
      city_id: 0,
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
        <p className="text-3xl">Adicionar ponto doação</p>
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Name"
          onChange={(e) =>
            setCreateDonationPoint({
              ...createDonationPoint,
              name: e.currentTarget.value,
            })
          }
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Street"
          onChange={(e) =>
            setCreateDonationPoint({
              ...createDonationPoint,
              street: e.currentTarget.value,
            })
          }
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Number"
          onChange={(e) =>
            setCreateDonationPoint({
              ...createDonationPoint,
              number: e.currentTarget.value,
            })
          }
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="Additional"
          onChange={(e) =>
            setCreateDonationPoint({
              ...createDonationPoint,
              additional: e.currentTarget.value,
            })
          }
        />
        <input
          type="text"
          className="bg-transparent p-2 border-s-white border-2"
          placeholder="City_Id"
          onChange={(e) =>
            setCreateDonationPoint({
              ...createDonationPoint,
              city_id: Number(e.currentTarget.value),
            })
          }
        />
        <button
          className={`p-2 bg-green-600 hover:bg-green-900 ease-in-out w-1/3 self-end`}
          onClick={() => create(createDonationPoint)}
        >
          Criar ponto doação
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
        <p className="text-3xl">Remover ponto doação</p>
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
          Remover ponto doação
        </button>
      </div>
    </div>
  );
}
