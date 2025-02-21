import { FC } from 'react'
import sx from './Input.module.scss'

interface IInput {
  id: string
  placeholder: string
  required?: boolean
  type?: string
  value?: number | string
}

export const Input: FC<IInput> = ({ id, placeholder, value, type = 'text' }) => {
  return (
    <input
      id={id}
      name={id}
      placeholder={placeholder}
      className={sx.input}
      type={type}
      step={0.00000001}
      value={value}
    />
  )
}
