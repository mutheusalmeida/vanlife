import { Title } from '@/title'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type Data = {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
  type: 'luxury' | 'simple' | 'rugged'
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
          <div className="flex flex-col gap-[10px]" key={van.id}>
            <img
              className="rounded-md min-h-[230px]"
              src={van.imageUrl}
              alt={`${van.name} illustration image`}
            />

            <div className="flex gap-7 justify-between">
              <div className="flex flex-col gap-1">
                <Title heading="h2" className="text-xl leading-8 font-semibold">
                  {van.name}
                </Title>

                <span
                  className={twMerge(
                    'flex font-medium justify-center items-center h-[2.125em] min-w-[5.375em] leading-[2.125em] max-w-max rounded-md text-orange-200 capitalize px-2',
                    van.type === 'simple'
                      ? 'bg-orange'
                      : van.type === 'luxury'
                      ? 'bg-black'
                      : 'bg-green'
                  )}
                >
                  {van.type}
                </span>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-xl leading-8 font-semibold">
                  ${van.price}
                </span>

                <span className="text-sm text-black-200 mt-[-6px]">/day</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
