'use client';

import { useRouter } from "next/navigation";

interface HotelCardImageProps {
  image_url: string;
}

export default function HotelCardImage({ image_url }: HotelCardImageProps) {
  const navigate = useRouter();

  return (
    <div
      className="flex w-full border-solid border-white border-b-2 py-4"
      onClick={()=> navigate.push("/user/Reservation")}
    >
      <img className="object-cover" src={image_url} />
    </div>
  );
}
