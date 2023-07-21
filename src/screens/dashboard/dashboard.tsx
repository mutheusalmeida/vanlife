import { ReactComponent as StarSvg } from '@/assets/star-icon.svg'
import { Title } from '@/title'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { VanType } from 'vans'

export const Dashboard = () => {
  const [data, setData] = useState<VanType[] | null>(null)

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/host/vans')
      const data = await res.json()

      setData(data?.vans)
    }

    getData()
  }, [])

  return (
    <>
      <div className="bg-orange-200 px-4 py-11">
        <div className="container max-w-4xl mx-auto">
          <Title className="font-bold mb-6" heading="h2">
            Welcome!
          </Title>

          <div className="flex justify-between gap-4 mb-6">
            <p className="font-medium text-black-100">
              Income last <span className="font-bold">30 days</span>
            </p>

            <Link
              className="hover:text-black-100 hover:underline transition-colors"
              to="income"
            >
              Details
            </Link>
          </div>

          <Title className="text-5xl" heading="h3">
            $2,260
          </Title>
        </div>
      </div>

      <div className="bg-orange-300 px-4 py-11">
        <div className="container max-w-4xl mx-auto flex justify-between gap-4">
          <div className="flex justify-between gap-3">
            <Title className="text-2xl font-bold" heading="h2">
              Review score
            </Title>

            <p className="text-xl font-bold flex items-center">
              <StarSvg className="mr-2" />

              <span>5.0</span>

              <span className="font-normal text-black-100">/5</span>
            </p>
          </div>

          <Link
            className="hover:text-black-100 hover:underline transition-colors"
            to="reviews"
          >
            Details
          </Link>
        </div>
      </div>

      <div className="bg-orange-100 px-4 py-11">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between gap-3 mb-9">
            <Title className="text-2xl font-bold" heading="h2">
              Your listed vans
            </Title>

            <Link
              className="hover:text-black-100 hover:underline transition-colors"
              to="vans"
            >
              View all
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {data?.map(({ id, imageUrl, price, name }) => (
              <div
                className="flex gap-4 items-center py-4 px-6 rounded-md bg-white"
                key={id}
              >
                <img
                  className="w-[66px] aspect-square rounded-md"
                  src={imageUrl}
                  alt="Van image"
                />

                <div className="flex flex-col">
                  <Title className="text-xl font-semibold" heading="h3">
                    {name}
                  </Title>

                  <span className="text-black-100 font-medium">
                    ${price}/day
                  </span>
                </div>

                <Link
                  className="ml-auto hover:text-black-100 hover:underline transition-colors"
                  to="vans"
                >
                  Edit
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
