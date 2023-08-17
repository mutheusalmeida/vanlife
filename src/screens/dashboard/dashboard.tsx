import { ReactComponent as StarSvg } from '@/assets/star-icon.svg'
import { useUser } from '@/contexts/user-context'
import { Loading } from '@/loading'
import { getHostVans } from '@/resources/api'
import { slugfy } from '@/resources/utils'
import { Title } from '@/title'
import { Toast } from '@/toast'
import Van from '@/van'
import { FirebaseError } from 'firebase/app'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import type { ErrorType, VanType } from 'vanlife'

export const Dashboard = () => {
  const [data, setData] = useState<VanType[] | null>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const locationFrom = location.state?.from
  const [error, setError] = useState<ErrorType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useUser()

  useEffect(() => {
    const getData = async () => {
      if (user && user.id) {
        try {
          setIsLoading(true)
          const data = await getHostVans<VanType[]>(user.id)

          setData(data)
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
    }

    getData()
  }, [user])

  return (
    <>
      {locationFrom === '/sign-in' && (
        <Toast
          onOpenChange={() => navigate(location.pathname, {})}
          type="success"
          title="Great!"
          content="You're logged in."
        />
      )}

      <div className="bg-orange-200 px-4 py-11">
        <div className="container max-w-4xl mx-auto">
          <Title className="font-bold mb-6" heading="h2">
            Welcome, {user?.name}
          </Title>

          <div className="flex justify-between gap-4 mb-6">
            <p className="font-medium text-black-100">
              Income last <span className="font-bold">30 days</span>
            </p>

            <Link
              className="hover:text-black-100 hover:underline transition-colors"
              to="income"
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

      <Van.Wrapper>
        <div className="flex justify-between gap-3 mb-9">
          <Title className="text-2xl font-bold" heading="h2">
            Your listed vans
          </Title>

          <Van.Link path="vans">View all</Van.Link>
        </div>

        {error ? (
          <p className="text-center">{error.message}</p>
        ) : isLoading ? (
          <Loading />
        ) : data ? (
          <Van.Container>
            {data.map(({ id, imageUrl, price, name }) => (
              <div
                className="flex justify-between gap-4 items-center py-4 px-6 rounded-md bg-white"
                key={id}
              >
                <Van.Content imageUrl={imageUrl} price={price} name={name} />

                <Van.Link path={`vans/${slugfy(name)}-${id}`}>Edit</Van.Link>
              </div>
            ))}
          </Van.Container>
        ) : (
          <p className="text-center">No van found</p>
        )}
      </Van.Wrapper>
    </>
  )
}
