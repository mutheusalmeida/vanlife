import { useHostVan } from '@/layouts/host-van-details-layout'

export const HostVanPhotos = () => {
  const { data } = useHostVan()

  return (
    <div>
      <img
        className="w-[102px] aspect-square rounded-md"
        src={data.imageUrl}
        alt={`${data.name} photo`}
      />
    </div>
  )
}
