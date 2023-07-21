import { useHostVan } from '@/layouts/host-van-details-layout'

export const HostVanDetails = () => {
  const { data } = useHostVan()

  return (
    <div className="flex flex-col gap-4">
      <p>
        <span className="font-bold">Name: </span>
        {data.name}
      </p>

      <p className="capitalize">
        <span className="font-bold">Category: </span>
        {data.type}
      </p>

      <p>
        <span className="font-bold">Description: </span>
        {data.description}
      </p>

      <p>
        <span className="font-bold">Visibility: </span>Public
      </p>
    </div>
  )
}
