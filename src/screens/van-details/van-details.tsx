import { slugfy } from '@/resources/utils'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { VanType } from 'vans'

export const VanDetails = () => {
  const { id } = useParams()
  const [data, setData] = useState<VanType[] | null>(null)
  const van = data?.find((van) => slugfy(van.name) === id)

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/vans')
      const data = await res.json()

      setData(data?.vans)
    }

    getData()
  }, [])

  if (data && !van) {
    throw new Response('Not Found', { status: 404 })
  }

  return (
    <div>
      <img src={van?.imageUrl} />
    </div>
  )
}
