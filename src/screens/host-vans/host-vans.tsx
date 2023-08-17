import { useUser } from '@/contexts/user-context'
import { Loading } from '@/loading'
import { getHostVans } from '@/resources/api'
import { slugfy } from '@/resources/utils'
import { Title } from '@/title'
import Van from '@/van'
import { FirebaseError } from 'firebase/app'
import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ErrorType, VanType } from 'vanlife'

export const HostVans = () => {
  const [data, setData] = useState<VanType[] | null>(null)
  const [error, setError] = useState<ErrorType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useUser()
  const [counter, setCounter] = useState(0)

  const getData = useCallback(async () => {
    if (user && user.id) {
      try {
        setIsLoading(true)
        console.log('Loading:', true)
        const data = await getHostVans<VanType[]>(user.id)

        setData(data)
        setCounter((prev) => prev + 1)
      } catch (err: unknown) {
        if (err instanceof FirebaseError) {
          const message =
            (err.customData?.message as string) || err.message || err.code

          setError({ message })
        }
      } finally {
        setIsLoading(false)
      }
    }
  }, [user])

  useEffect(() => {
    if (counter === 0) {
      getData()
    }
  }, [counter, getData])

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
