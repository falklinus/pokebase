import { Link, useRouter } from '@tanstack/react-router'
import { ReactNode } from 'react'
import { Button } from '@ui/Button'
import { Sidebar } from '../Sidebar/Sidebar'
import { Card } from '@ui/Card'

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
        <Card>
          <ul className='flex gap-2'>
            <li>
              <Link to='/'>
                <Button active={pathname === '/'}>Home</Button>
              </Link>
            </li>
            <li>
              <Link to='/pokemon'>
                <Button active={pathname.includes('pokemon')}>Pokemon</Button>
              </Link>
            </li>
          </ul>
        </Card>
      </nav>
      <div className='flex-grow flex gap-4'>
        <aside className='basis-[20%]'>
          <Card fullHeight>
            <Sidebar />
          </Card>
        </aside>
        <main className='flex-grow'>{children}</main>
      </div>
    </div>
  )
}
