import { slugfy } from '@/resources/utils'
import { Title } from '@/title'
import { VanLabel } from '@/van-label'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { VanType } from 'vans'

export const Vans = () => {
  const [data, setData] = useState<VanType[] | null>(null)

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
        {data &&
          data.map((van) => (
            <Link key={van.id} to={`${slugfy(van.name)}-${van.id}`}>
              <div className="flex flex-col gap-[10px]">
                <img
                  className="rounded-md min-h-[230px]"
                  src={van.imageUrl}
                  alt={`${van.name} illustration image`}
                />

                <div className="flex gap-7 justify-between">
                  <div className="flex flex-col gap-1">
                    <Title
                      heading="h2"
                      className="text-xl leading-8 font-semibold"
                    >
                      {van.name}
                    </Title>

                    <VanLabel ele="span" type={van.type} />
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-xl leading-8 font-semibold">
                      ${van.price}
                    </span>

                    <span className="text-sm text-black-200 mt-[-6px]">
                      /day
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
