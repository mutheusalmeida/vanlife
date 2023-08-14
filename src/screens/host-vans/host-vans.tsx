import { Loading } from '@/loading'
import { getHostVans } from '@/resources/api'
import { slugfy } from '@/resources/utils'
import { Title } from '@/title'
import Van from '@/van'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ErrorType, VanType } from 'vans'

export const HostVans = () => {
  const [data, setData] = useState<VanType[] | null>(null)
  const [error, setError] = useState<ErrorType | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true)
        const data = await getHostVans<VanType[]>()

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

  return (
    <Van.Wrapper className="pt-0">
      <div className="flex justify-between gap-3 mb-9">
        <Title className="text-3xl font-bold" heading="h2">
          Your listed vans
        </Title>
      </div>

      {error ? (
        <p className="text-center">{error.message}</p>
      ) : isLoading ? (
        <Loading />
      ) : data ? (
        <Van.Container>
          {data.map(({ id, imageUrl, price, name }) => (
            <Link
              className="flex justify-between gap-4 items-center py-4 px-6 rounded-md bg-white"
              key={id}
              to={`${slugfy(name)}-${id}`}
            >
              <Van.Content imageUrl={imageUrl} price={price} name={name} />
            </Link>
          ))}
        </Van.Container>
      ) : (
        <p className="text-center">No van found</p>
      )}
    </Van.Wrapper>
  )
}
