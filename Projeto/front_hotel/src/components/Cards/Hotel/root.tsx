import { ReactElement } from "react";

interface HotelCardRootProps {
  children: ReactElement;
}

export default function HotelCardRoot({ children }: HotelCardRootProps) {
  return <div className="flex flex-col w-full">{children}</div>;
}
