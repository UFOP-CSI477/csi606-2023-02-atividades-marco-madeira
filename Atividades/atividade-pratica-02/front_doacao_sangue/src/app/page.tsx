'use client';
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  return (
    <div className="flex flex-row gap-x-8">
      <button
        className={`p-2 bg-green-600 hover:bg-green-900 ease-in-out w-1/3 self-end`}
        onClick={()=> router.push("/BloodType")}
      >
        Tipo de sangue
      </button>
      <button
        className={`p-2 bg-green-600 hover:bg-green-900 ease-in-out w-1/3 self-end`}
        onClick={()=> router.push("/City")}
      >
        Cidade
      </button>
      <button
        className={`p-2 bg-green-600 hover:bg-green-900 ease-in-out w-1/3 self-end`}
        onClick={()=> router.push("/Donation")}
      >
        Doação
      </button>
      <button
        className={`p-2 bg-green-600 hover:bg-green-900 ease-in-out w-1/3 self-end`}
        onClick={()=> router.push("/DonationPoint")}
      >
        Ponto do doação
      </button>
      <button
        className={`p-2 bg-green-600 hover:bg-green-900 ease-in-out w-1/3 self-end`}
        onClick={()=> router.push("/Person")}
      >
        Pessoa
      </button>
      <button
        className={`p-2 bg-green-600 hover:bg-green-900 ease-in-out w-1/3 self-end`}
        onClick={()=> router.push("/State")}
      >
        Estado
      </button>
    </div>
  );
}
