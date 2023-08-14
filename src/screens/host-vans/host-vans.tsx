import { Loading } from '@/loading'
import { getHostVans } from '@/resources/api'
import { slugfy } from '@/resources/utils'
import { Title } from '@/title'
import Van from '@/van'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { VanType } from 'vans'

export const ListedVans = () => {
  const [data, setData] = useState<VanType[] | null>(null)

  useEffect(() => {
    const getData = async () => {
      const vans = await getHostVans<VanType[]>()

      setData(vans)
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

      {data ? (
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
        <Loading />
      )}
    </Van.Wrapper>
  )
}
