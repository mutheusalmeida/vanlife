import { ErrorPage } from '@/error-page'
import { HostLayout } from '@/layouts/host-layout'
import { MainLayout } from '@/layouts/main-layout'
import { About } from '@/screens/about'
import { Dashboard } from '@/screens/dashboard'
import { Home } from '@/screens/home'
import { Income } from '@/screens/income'
import { ListedVans } from '@/screens/listed-vans'
import { Reviews } from '@/screens/reviews'
import { VanDetails } from '@/screens/van-details'
import { Vans } from '@/screens/vans'
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
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<ListedVans />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Route>
  )
)
