import { Link, useRouter } from '@tanstack/react-router'
import { ReactNode } from 'react'
import { Button } from '../ui/Button'

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
            <li>
              <Button variant={pathname === '/' ? 'primary' : 'secondary'}>
                Home
              </Button>
            </li>
          </Link>
          <Link to='/pokemon'>
            <li>
              <Button
                variant={pathname.includes('pokemon') ? 'primary' : 'secondary'}
              >
                Pokemon
              </Button>
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
