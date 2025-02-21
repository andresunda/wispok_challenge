import { FC } from 'react'

import { Select } from '@/components/atoms'

import sx from './SelectLabel.module.scss'

interface ISelectLabel {
  id: string
  defaultValue: string
  label: string
  placeholder: string
  options: { value: string; label: string }[]
  onChange: (value: string) => void
}

export const SelectLabel: FC<ISelectLabel> = ({
  id,
  defaultValue,
  label,
  placeholder,
  options,
  onChange,
}: ISelectLabel) => {
  return (
    <div className={sx.container}>
      <label className={sx.label}>{label}</label>
      <Select id={id} defaultValue={defaultValue} placeholder={placeholder} options={options} onChange={onChange} />
    </div>
  )
}
