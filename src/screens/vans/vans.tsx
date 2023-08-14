import { Loading } from '@/loading'
import { getVans } from '@/resources/api'
import { slugfy } from '@/resources/utils'
import { Title } from '@/title'
import { VanLabel } from '@/van-label'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import type { ErrorType, VanType } from 'vans'

type LabelsType = Pick<VanType, 'type'>

const labels: LabelsType[] = [
  {
    type: 'simple',
  },
  {
    type: 'luxury',
  },
  {
    type: 'rugged',
  },
]

export const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const typeParam = searchParams.get('type')?.toLocaleLowerCase()
  const [data, setData] = useState<VanType[] | null>(null)
  const [error, setError] = useState<ErrorType | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true)
        const data = await getVans<VanType[]>()

        setData(data)
      } catch (err: unknown) {
        let message = 'Unknown error'

        if (err instanceof Error) {
          message = err.message
        }

        setError({ message: message })
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [])

  if (error) {
    throw new Response(error.message, {
      statusText: error.message,
    })
  }

  const handleSearchParams = (type: string, value: string | undefined) => {
    setSearchParams((prev) => {
      if (value === undefined) {
        prev.delete(type)
      } else {
        prev.set(type, value)
      }

      return prev
    })
  }

  const filteredData = data?.filter((van) => van.type === typeParam)

  const displayData =
    filteredData && filteredData.length > 0 ? filteredData : data

  return isLoading ? (
    <Loading />
  ) : displayData ? (
    <div className="container max-w-4xl mx-auto py-14 px-4">
      <Title heading="h1" className="text-[2rem] font-bold leading-[1.1875em]">
        Explore our van options
      </Title>

      <div className="flex gap-5 mt-6 flex-wrap">
        {labels.map(({ type }, index) => (
          <VanLabel
            key={index}
            ele="button"
            onClick={() => handleSearchParams('type', type)}
            className={twMerge(
              'transition-all bg-orange-200 text-black-100 hover:text-orange-200 h-[2.375em] min-w-[6.5em] leading-[2.375em]',
              type === 'simple'
                ? 'hover:bg-orange'
                : type === 'luxury'
                ? 'hover:bg-black'
                : 'hover:bg-green',
              typeParam === type ? 'text-orange-200' : '',
              typeParam === type
                ? type === 'simple'
                  ? 'bg-orange'
                  : type === 'luxury'
                  ? 'bg-black'
                  : 'bg-green'
                : ''
            )}
            type={type}
          />
        ))}

        <button
          onClick={() => handleSearchParams('type', undefined)}
          className="flex text-black-100 font-medium justify-center items-center h-[2.375em] min-w-[6.5em] leading-[2.375em] max-w-max rounded-md hover:opacity-80 transition-all underline ml-auto"
        >
          Clear filters
        </button>
      </div>

      <div className="grid py-14 grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] gap-y-8 gap-x-7">
        {displayData.map((van) => (
          <Link
            state={{ search: `?${searchParams.toString()}` }}
            key={van.id}
            to={`${slugfy(van.name)}-${van.id}`}
          >
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

                  <span className="text-sm text-black-200 mt-[-6px]">/day</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <p className="text-center">No van found</p>
  )
}
