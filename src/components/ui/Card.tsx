import { ReactNode } from 'react'
import classNames from 'classnames'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: boolean
}

const Card = ({ children, className, padding = true }: CardProps) => {
  return (
    <div
      className={classNames(
        'bg-surface rounded-2xl shadow-smooth transition hover:shadow-lg',
        padding && 'p-5',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
