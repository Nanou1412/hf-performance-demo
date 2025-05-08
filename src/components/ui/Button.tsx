import { ReactNode } from 'react'
import classNames from 'classnames'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'danger'
  full?: boolean
  className?: string
  disabled?: boolean
}

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  full = false,
  className,
  disabled = false
}: ButtonProps) => {
  const baseClasses =
    'text-sm font-semibold rounded-xl transition px-5 py-2 shadow-sm'

  const variants = {
    primary: 'bg-primary text-white hover:bg-red-600',
    secondary: 'bg-white text-black hover:bg-neutral-200',
    danger: 'bg-red-600 text-white hover:bg-red-800'
  }

  const finalClass = classNames(
    baseClasses,
    variants[variant],
    full && 'w-full text-center',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  return (
    <button
      type={type}
      className={finalClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
