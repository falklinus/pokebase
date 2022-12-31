import { cva, VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

const buttonStyles = cva(
  'text-center px-4 py-2 rounded font-medium border border-transparent focus:outline-none transition ease-in-out duration-300',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-500 text-slate-100 hover:bg-primary-400 active:bg-primary-600',
        secondary:
          'bg-primary-100 text-primary-600 hover:border-primary-400 active:bg-primary-200',
        tertiary:
          'text-primary-600 hover:border-primary-500 active:bg-primary-100',
      },
      active: {
        true: 'bg-primary-500 text-slate-100 cursor-default',
        false:
          'text-primary-600 hover:border-primary-500 active:bg-primary-100',
      },
    },
  }
)

export type ButtonOrLinkProps = HTMLAttributes<
  HTMLButtonElement | HTMLAnchorElement
>

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

export function Button({ variant, active, ...props }: Props) {
  return <button className={buttonStyles({ variant, active })} {...props} />
}
