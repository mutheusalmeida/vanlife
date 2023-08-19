import { useHostVans } from '@/layouts/host-layout'
import { Loading } from '@/loading'
import { slugfy } from '@/resources/utils'
import { Title } from '@/title'
import Van from '@/van'
import { Link } from 'react-router-dom'

export const HostVans = () => {
  const { data, error, isLoading } = useHostVans()

  return (
    <Van.Wrapper className="pt-0">
      <div className="mb-9 flex justify-between gap-3">
        <Title className="text-3xl font-bold" heading="h2">
          Your listed vans
        </Title>
      </div>

      {error ? (
        <p className="text-center">{error.message}</p>
      ) : isLoading ? (
        <Loading />
      ) : data && data.length > 0 ? (
        <Van.Container>
          {data.map(({ id, imageUrl, price, name }) => (
            <Link
              className="flex items-center justify-between gap-4 rounded-md bg-white px-6 py-4"
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
