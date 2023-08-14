import { ErrorPage } from '@/error-page'
import { AuthLayout } from '@/layouts/auth-layout'
import { HostLayout } from '@/layouts/host-layout'
import { HostVanDetailsLayout } from '@/layouts/host-van-details-layout'
import { MainLayout } from '@/layouts/main-layout'
import { About } from '@/screens/about'
import { Dashboard } from '@/screens/dashboard'
import { Home } from '@/screens/home'
import { HostVanDetails } from '@/screens/host-van-details'
import { HostVanPhotos } from '@/screens/host-van-photos'
import { HostVanPricing } from '@/screens/host-van-pricing'
import { HostVans } from '@/screens/host-vans'
import { Income } from '@/screens/income'
import { Reviews } from '@/screens/reviews'
import { VanDetails } from '@/screens/van-details'
import { Vans } from '@/screens/vans'
import { SingIn } from '@/sign-in'
import { SingUp } from '@/sign-up'
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from 'react-router-dom'

export const routes = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      element={<MainLayout />}
      errorElement={
        <MainLayout>
          <ErrorPage />
        </MainLayout>
      }
    >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} />
      <Route path="vans/:vanId" element={<VanDetails />} />
      <Route element={<AuthLayout />}>
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:vanId" element={<HostVanDetailsLayout />}>
            <Route index element={<HostVanDetails />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="sign-in" element={<SingIn />} />
      <Route path="sign-up" element={<SingUp />} />
    </Route>
  )
)
