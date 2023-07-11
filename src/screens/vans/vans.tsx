import { Title } from '@/title'
import { useEffect, useState } from 'react'

type Data = {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
  type: string
}

export const Vans = () => {
  const [data, setData] = useState<Data[] | null>(null)

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/vans')
      const data = await res.json()

      setData(data?.vans)
    }

    getData()
  }, [])

  console.log(data)

  return (
    <div className="container max-w-4xl mx-auto py-14 px-4">
      <Title heading="h1" className="text-[2rem] font-bold leading-[1.1875em]">
        Explore our van options
      </Title>

      <div className="flex gap-5 mt-6 flex-wrap">
        <button className="flex text-black-100 font-medium bg-orange-200 justify-center items-center h-[2.375em] min-w-[6.5em] leading-[2.375em] max-w-max rounded-md hover:text-orange-200 transition-all hover:bg-orange">
          Simple
        </button>

        <button className="flex text-black-100 font-medium bg-orange-200 justify-center items-center h-[2.375em] min-w-[6.5em] leading-[2.375em] max-w-max rounded-md hover:text-orange-200 transition-all hover:bg-black">
          Luxury
        </button>

        <button className="flex text-black-100 font-medium bg-orange-200 justify-center items-center h-[2.375em] min-w-[6.5em] leading-[2.375em] max-w-max rounded-md hover:text-orange-200 transition-all hover:bg-green">
          Rugged
        </button>

        <button className="flex text-black-100 font-medium justify-center items-center h-[2.375em] min-w-[6.5em] leading-[2.375em] max-w-max rounded-md hover:opacity-80 transition-all underline ml-auto">
          Clear filters
        </button>
      </div>

      <div className="grid py-14 grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] gap-y-8 gap-x-7">
        {data?.map((van) => (
          <div className="" key={van.id}>
            {van.name}
          </div>
        ))}
      </div>
    </div>
  )
}
