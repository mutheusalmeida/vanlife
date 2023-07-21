import { Title } from '@/title'

type VanContentProps = {
  imageUrl: string
  name: string
  price: number
}

export const VanContent = ({ name, imageUrl, price }: VanContentProps) => {
  return (
    <div className="flex items-center gap-4">
      <img
        className="w-[66px] aspect-square rounded-md"
        src={imageUrl}
        alt="Van image"
      />

      <div className="flex flex-col">
        <Title className="text-xl font-semibold" heading="h3">
          {name}
        </Title>

        <span className="text-black-100 font-medium">${price}/day</span>
      </div>
    </div>
  )
}
