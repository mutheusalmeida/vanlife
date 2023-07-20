import { ReactComponent as StarSvg } from '@/assets/star-icon.svg'
import { Title } from '@/title'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { VanType } from 'vans'

export const Dashboard = () => {
  const [, setData] = useState<VanType[] | null>(null)

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
      <div className="bg-orange-200 px-4 py-9">
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
              to="vans"
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
    </>
  )
}
