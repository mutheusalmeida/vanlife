import { ErrorPage } from '@/error-page'
import { Layout } from '@/layout'
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
      <Route path="vans/:id" element={<VanDetails />} />
    </Route>
  )
)
