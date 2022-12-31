import { cva, VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

const cardStyles = cva('p-4 shadow rounded', {
  variants: {
    shadow: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      '2xl': 'shadow-2xl',
    },
    fullWidth: { true: 'w-full' },
    fullHeight: { true: 'h-full' },
  },
})

export type DivProps = HTMLAttributes<HTMLDivElement>

export interface Props extends DivProps, VariantProps<typeof cardStyles> {}

export function Card({ shadow, fullWidth, fullHeight, ...props }: Props) {
  return (
    <div className={cardStyles({ shadow, fullWidth, fullHeight })} {...props} />
  )
}
