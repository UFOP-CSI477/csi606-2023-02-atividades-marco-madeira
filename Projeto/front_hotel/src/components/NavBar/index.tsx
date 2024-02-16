"use client";

import { usePathname, useRouter } from "next/navigation";
import { IoSettingsOutline, IoTicketOutline } from "react-icons/io5";

export default function NavBar() {
  const navigate = useRouter();
  const path = usePathname();
  const role = path.split("/")[1];

  return (
    <div className="w-full border-white border-solid border-b-2 self-center mb-8 bg-black">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <img
            src={"Logo.png"}
            className="h-28"
            onClick={() => navigate.push("/user/Home")}
          />
          <p className="text-xl">Free Place</p>
        </div>

        {role == "user" ? (
          <>
            <div>
              <input
                type="text"
                className="p-3 border border-white border-1 rounded-md bg-transparent"
                placeholder="Pesquisar aventuras..."
              />
            </div>

            <div className="flex gap-x-8">
              <button
                className="text-4xl"
                onClick={() => navigate.push("/user/Reservation/All")}
              >
                <IoTicketOutline />
              </button>
              <button className="text-4xl">
                <IoSettingsOutline />
              </button>
            </div>
          </>
        ): <p className="text-xl">Admin panel</p>}
      </div>
    </div>
  );
}
