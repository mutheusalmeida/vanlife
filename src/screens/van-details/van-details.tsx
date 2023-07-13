import { ReactComponent as ArrowIcon } from '@/assets/arrow-icon.svg'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import type { VanType } from 'vans'

export const VanDetails = () => {
  const { id } = useParams()
  const [data, setData] = useState<VanType | null>(null)

  useEffect(() => {
    const getData = async () => {
      if (id) {
        const [slugId] = id.split('-').slice(-1)
        const res = await fetch(`/api/vans/${slugId}`)
        const data = await res.json()

        setData(data?.vans)
      }
    }

    getData()
  }, [id])

  return (
    <div className="container max-w-[497px] mx-auto my-10">
      <Link
        className="flex items-center gap-2 font-medium underline text-black-200"
        to="/vans"
      >
        <ArrowIcon /> <span>Back to all vans</span>
      </Link>

      <img className="rounded-md mt-10 mb-12 h-[497px]" src={data?.imageUrl} />
    </div>
  )
}
