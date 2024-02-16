'use client';

import { useRouter } from "next/navigation";

interface HotelCardImageProps {
  image_url: string;
  route_url: string;
}

export default function HotelCardImage({ image_url, route_url }: HotelCardImageProps) {
  const navigate = useRouter();

  return (
    <div
      className="flex min-w-full border-solid border-white border-b-2 py-4 max-h-72"
      onClick={()=> navigate.push(route_url)}
    >
      <img className="object-fill w-full" src={image_url} />
    </div>
  );
}
