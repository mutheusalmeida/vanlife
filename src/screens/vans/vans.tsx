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
    <div>
      {data?.map((van) => (
        <div key={van.id}>{van.name}</div>
      ))}
    </div>
  )
}
