import { ReactComponent as ArrowIcon } from '@/assets/arrow-icon.svg'
import { Loading } from '@/loading'
import { NavigateButton } from '@/navigate-button'
import { Title } from '@/title'
import { VanLabel } from '@/van-label'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { VanType } from 'vans'

export const HostVanDetails = () => {
  const { vanId } = useParams()
  const [data, setData] = useState<VanType | null>(null)

  useEffect(() => {
    const getData = async () => {
      if (vanId) {
        const [slugId] = vanId.split('-').slice(-1)
        const res = await fetch(`/api/vans/${slugId}`)
        const data = await res.json()

        setData(data?.vans)
      }
    }

    getData()
  }, [vanId])

  return (
    <div className="px-4 pb-9">
      <div className="max-w-4xl mx-auto">
        <NavigateButton className="mb-9" path="/host/vans">
          <ArrowIcon /> <span>Back to all vans</span>
        </NavigateButton>

        {data ? (
          <div className="bg-white p-6 rounded-md">
            <div className="flex gap-5 items-center">
              <img
                className="rounded-md h-40 aspect-square"
                src={data.imageUrl}
              />

              <div className="flex flex-col gap-4">
                <VanLabel
                  className="h-[2.1538em] text-[0.8125rem] leading-[2.1538em]"
                  ele="span"
                  type={data.type}
                />

                <div>
                  <Title heading="h2" className="text-[1.75rem] font-bold">
                    {data.name}
                  </Title>

                  <p className="font-medium">
                    <span className="text-xl font-bold">${data.price}</span>
                    /day
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}
