import { Link, useRouter } from '@tanstack/react-router'
import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const {
    state: {
      currentLocation: { pathname },
    },
  } = useRouter()

  return (
    <div className='h-full flex flex-col gap-4'>
      <nav>
        <ul className='flex gap-2'>
          <Link to='/'>
            <li className={`card font-bold ${pathname === '/' && 'active'}`}>
              Home
            </li>
          </Link>
          <Link to='/pokemon'>
            <li
              className={`card font-bold ${
                pathname.includes('pokemon') && 'active'
              }`}
            >
              Pokemon
            </li>
          </Link>
        </ul>
      </nav>
      <div className='flex-grow flex gap-4 w-full'>
        <aside className='w-60'>Hello</aside>
        <main className='card flex-grow'>{children}</main>
      </div>
    </div>
  )
}
