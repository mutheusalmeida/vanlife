import { ReactComponent as ArrowIcon } from '@/assets/arrow-icon.svg'
import { Button } from '@/button'
import { Loading } from '@/loading'
import { NavigateButton } from '@/navigate-button'
import { Title } from '@/title'
import { VanLabel } from '@/van-label'
import { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import type { ErrorType, VanType } from 'vans'

export const VanDetails = () => {
  const { vanId } = useParams()
  const [data, setData] = useState<VanType | null>(null)
  const [error, setError] = useState<ErrorType | null>(null)
  const location = useLocation()
  const prevSearch = location.state?.search || ''
  const type = new URLSearchParams(location.state?.search).get('type')

  useEffect(() => {
    const getData = async () => {
      if (vanId) {
        const [slugId] = vanId.split('-').slice(-1)

        const response = await fetch(`/api/vans/${slugId}`)

        if (!response.ok) {
          setError({ message: response.statusText, status: response.status })
        }

        const data = await response.json()
        setData(data?.vans)
      }
    }

    getData()
  }, [vanId])

  if (error) {
    throw new Response(error.message, {
      statusText: error.message,
      status: error.status,
    })
  }

  return data ? (
    <div className="container max-w-[497px] mx-auto my-10">
      <NavigateButton path={`..${prevSearch}`} relative="path">
        <ArrowIcon />{' '}
        <span>
          Back to{' '}
          {type ? type.slice(0, 1).toUpperCase() + type.slice(1) : 'all'} vans
        </span>
      </NavigateButton>

      <img className="rounded-md mt-10 mb-12 h-[497px]" src={data.imageUrl} />

      <VanLabel ele="span" type={data.type} />

      <Title
        heading="h2"
        className="text-[2rem] leading-[1.0625em] font-bold my-5"
      >
        {data.name}
      </Title>

      <p className="text-xl font-medium">
        <span className="text-2xl font-bold">${data.price}</span>/day
      </p>

      <p className="font-medium leading-6 my-5">{data.description}</p>

      <Button ele={Link} to="/">
        Rent this van
      </Button>
    </div>
  ) : (
    <Loading />
  )
}
