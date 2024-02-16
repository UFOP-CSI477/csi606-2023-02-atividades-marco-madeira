import CategoryCards from "@/components/Cards/Category";
import { HotelCard } from "@/components/Cards/Hotel";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-row justify-between w-1/2">
        <CategoryCards title="Florestas" image_url="Florest.jpg" />
        <CategoryCards title="Cachoeiras" image_url="Waterfall.jpg" />
        <CategoryCards title="Praias" image_url="Beach.jpg" />
        <CategoryCards title="Montanhas" image_url="Mountain.jpg" />
      </div>
      <div className="flex flex-row justify-between gap-16">
        <HotelCard.Root>
          <>
            <HotelCard.Image image_url="Italia.jpeg" />
            <HotelCard.Information value={300} location="Italy, Bernoud" />
          </>
        </HotelCard.Root>
        <HotelCard.Root>
          <>
            <HotelCard.Image image_url="Philp.webp" />
            <HotelCard.Information value={500} location="Italy, Bernoud" />
          </>
        </HotelCard.Root>
        <HotelCard.Root>
          <>
            <HotelCard.Image image_url="Italia.jpeg" />
            <HotelCard.Information value={300} location="Italy, Bernoud" />
          </>
        </HotelCard.Root>
      </div>
    </div>
  );
}
