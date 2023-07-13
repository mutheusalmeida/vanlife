import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
    <div>
      <img src={data?.imageUrl} />
    </div>
  )
}
