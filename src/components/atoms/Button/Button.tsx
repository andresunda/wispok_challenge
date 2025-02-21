import { FC } from 'react'
import sx from './Button.module.scss'

type TButtonType = 'submit' | 'reset' | 'button' | undefined

interface IButton {
  children: React.ReactNode
  onClick?: () => void
  type?: TButtonType
  className?: string
}

export const Button: FC<IButton> = ({ type = 'button', onClick, children, className }) => {
  return (
    <button type={type} onClick={onClick} className={`${sx.button} ${className}`}>
      {children}
    </button>
  )
}
