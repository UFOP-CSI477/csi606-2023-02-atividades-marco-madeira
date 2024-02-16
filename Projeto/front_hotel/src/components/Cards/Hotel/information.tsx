interface HotelCardInformationProps {
  value: number;
  location: string;
}

export default function HotelCardInformation({
  value,
  location,
}: HotelCardInformationProps) {
  return (
    <div className="flex w-full bg-black bg-opacity-60 p-2">
      <div className="flex w-full flex-row justify-between text-xl">
        <div>
          <p>{`${value}$, per night`}</p>
        </div>
        <div>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}
