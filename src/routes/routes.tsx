import { Dashboard } from '@/dashboard'
import { ErrorPage } from '@/error-page'
import { HostLayout } from '@/host-layout'
import { Income } from '@/income'
import { Layout } from '@/layout'
import { ListedVans } from '@/listed-vans'
import { Reviews } from '@/reviews'
import { About } from '@/screens/about'
import { Home } from '@/screens/home'
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
      element={<Layout />}
      errorElement={
        <Layout>
          <ErrorPage />
        </Layout>
      }
    >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} />
      <Route path="vans/:vanId" element={<VanDetails />} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/host/income" element={<Income />} />
        <Route path="/host/vans" element={<ListedVans />} />
        <Route path="/host/reviews" element={<Reviews />} />
      </Route>
    </Route>
  )
)
