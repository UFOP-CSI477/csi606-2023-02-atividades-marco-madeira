"use client";

import CategoryCards from "@/components/Cards/Category";
import { HotelCard } from "@/components/Cards/Hotel";
import CreateHotelForm from "@/components/Forms/CreateHotelForm";
import CreateRoomForm from "@/components/Forms/CreateRoomForm";
import { usePathname } from "next/navigation";

export default function Home() {
  const path = usePathname();
  const role = path.split("/")[1];

  return (
    <div className="flex flex-col gap-y-8">
      {role == "user" ? (
        <>
          <div className="flex flex-row justify-between w-full">
            <CategoryCards title="Florestas" image_url="Florest.jpg" />
            <CategoryCards title="Cachoeiras" image_url="Waterfall.jpg" />
            <CategoryCards title="Praias" image_url="Beach.jpg" />
            <CategoryCards title="Montanhas" image_url="Mountain.jpg" />
          </div>
          <div className="flex flex-row justify-between gap-16">
            <HotelCard.Root>
              <>
                <HotelCard.Image
                  image_url="Italia.jpeg"
                  route_url="/user/Reservation/1"
                />
                <HotelCard.Information value={300} location="Italy, Bernoud" />
              </>
            </HotelCard.Root>
            <HotelCard.Root>
              <>
                <HotelCard.Image
                  image_url="Philp.webp"
                  route_url="/user/Reservation/2"
                />
                <HotelCard.Information value={500} location="Silic, Greecy" />
              </>
            </HotelCard.Root>
          </div>
        </>
      ) : (
        <div className="flex flex-row gap-x-8">
          <CreateHotelForm />
          <CreateRoomForm />
        </div>
      )}
    </div>
  );
}
