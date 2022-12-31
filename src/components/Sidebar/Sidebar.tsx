import { Button } from '@ui/Button'

export function Sidebar() {
  return (
    <div className='grid grid-flow-col gap-4'>
      <Button variant={`primary`}>Snook</Button>
      <Button variant={`secondary`}>Va händerå?</Button>
    </div>
  )
}
