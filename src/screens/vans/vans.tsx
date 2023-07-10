import { useEffect } from 'react'

export const Vans = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/vans')
      const data = await res.json()

      console.log(data)
    }

    getData()
  }, [])

  return (
    <div>
      <h1>vans</h1>
    </div>
  )
}
