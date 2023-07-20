import { useEffect, useState } from 'react'
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

  console.log(data)

  return (
    <div>
      <h1>dashboard</h1>
    </div>
  )
}
