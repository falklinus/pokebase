import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/Home'
import { Pokemon } from './pages/Pokemon/Pokemon'
import './index.css'

import {
  Outlet,
  RouterProvider,
  Link,
  createReactRouter,
  createRouteConfig,
} from '@tanstack/react-router'
import { Layout } from './components/Layout/Layout'

const rootRoute = createRouteConfig({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
})

const indexRoute = rootRoute.createRoute({
  path: '/',
  component: Home,
})

const pokemonRoute = rootRoute.createRoute({
  path: '/pokemon',
  component: Pokemon,
})

const routeConfig = rootRoute.addChildren([indexRoute, pokemonRoute])

const router = createReactRouter({ routeConfig })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
