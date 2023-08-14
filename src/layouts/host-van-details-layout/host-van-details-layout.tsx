import { ReactComponent as ArrowIcon } from '@/assets/arrow-icon.svg'
import { Loading } from '@/loading'
import { NavigateButton } from '@/navigate-button'
import { getVan } from '@/resources/api'
import { formatCurrency } from '@/resources/utils'
import { Title } from '@/title'
import { VanLabel } from '@/van-label'
import { useEffect, useState } from 'react'
import { NavLink, Outlet, useOutletContext, useParams } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import type { VanType } from 'vans'

const nav = [
  {
    id: 0,
    label: 'Details',
    path: '.',
  },
  {
    id: 1,
    label: 'Pricing',
    path: 'pricing',
  },
  {
    id: 2,
    label: 'Photos',
    path: 'photos',
  },
]

export const HostVanDetailsLayout = () => {
  const { vanId } = useParams()
  const [data, setData] = useState<VanType | null>(null)

  useEffect(() => {
    const getData = async () => {
      if (vanId) {
        const [slugId] = vanId.split('-').slice(-1)
        const vans = await getVan<VanType>(slugId)

        setData(vans)
      }
    }

    getData()
  }, [vanId])

  return (
    <div className="px-4 pb-9">
      <div className="max-w-4xl mx-auto">
        <NavigateButton className="mb-9" path=".." relative="path">
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

                  <p className="text-xl font-bold leading-none">
                    {formatCurrency(data.price, { maximumFractionDigits: 0 })}

                    <span className="align-bottom font-medium text-base">
                      /day
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <nav
              className="my-7 text-black-100"
              aria-label="Van details navigation"
            >
              <ul className="flex flex-wrap gap-y-3 gap-x-6">
                {nav.map(({ id, path, label }) => (
                  <li key={id}>
                    <NavLink
                      className={({ isActive }) =>
                        twMerge(
                          'text-base font-medium hover:text-black hover:underline',
                          isActive ? 'text-black underline' : ''
                        )
                      }
                      to={path}
                      end={path === '.'}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <Outlet context={{ data }} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}

export const useHostVan = () => useOutletContext<{ data: VanType }>()
