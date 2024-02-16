interface CategoryCardsProps{
    title: string,
    image_url: string
}

export default function CategoryCards({title, image_url}: CategoryCardsProps) {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img src={image_url} width={150} height={150}/>
      </div>
      <div>
        <p className="text-lg">{title}</p>
      </div>
    </div>
  );
}
