/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import * as React from 'react'
import appCss from '~/styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Frida Kahlo | Mexico, Memory, and Roots',
      },
      {
        name: 'description',
        content:
          'A concise one-page TanStack Start site about Frida Kahlo, her importance to Mexico, and her German family roots.',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  notFoundComponent: () => (
    <main className="not-found">
      <p>Page not found.</p>
    </main>
  ),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <header className="site-header">
          <Link to="/" activeOptions={{ exact: true }}>
            Frida Kahlo
          </Link>
          <nav aria-label="Main navigation">
            <Link to="/" activeOptions={{ exact: true }}>
              Home
            </Link>
            <Link to="/paintings">Paintings</Link>
          </nav>
        </header>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
