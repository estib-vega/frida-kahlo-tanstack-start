import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultErrorComponent: ({ error }) => (
      <main className="not-found">
        <p>{error.message || 'Something went wrong.'}</p>
      </main>
    ),
    defaultNotFoundComponent: () => (
      <main className="not-found">
        <p>Page not found.</p>
      </main>
    ),
    scrollRestoration: true,
  })
  return router
}
