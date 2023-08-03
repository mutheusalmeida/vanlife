import { useHostVan } from '@/layouts/host-van-details-layout'
import { formatCurrency } from '@/resources/utils'

export const HostVanPricing = () => {
  const { data } = useHostVan()

  return (
    <div>
      <p className="text-black text-2xl font-medium leading-none">
        {formatCurrency(data.price)}
        <span className="text-black-100 text-base align-bottom">/day</span>
      </p>
    </div>
  )
}
