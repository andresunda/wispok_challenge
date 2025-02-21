import { FC } from 'react'

import { Input } from '@/components/atoms'

import sx from './InputLabel.module.scss'

interface IInputLabel {
  id: string
  label: string
  placeholder: string
  required?: boolean
  type?: string
  value?: number
}

export const InputLabel: FC<IInputLabel> = ({ id, label, placeholder, value, type = 'text' }) => {
  return (
    <div className={sx.container}>
      <label className={sx.label}>{label}</label>
      <Input id={id} placeholder={placeholder} type={type} value={value} />
    </div>
  )
}
