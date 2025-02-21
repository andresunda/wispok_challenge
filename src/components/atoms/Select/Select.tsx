import { FC } from 'react'
import sx from './Select.module.scss'

interface ISelect {
  id: string
  defaultValue: string
  placeholder: string
  options: { value: string; label: string }[]
  onChange: (value: string) => void
}

export const Select: FC<ISelect> = ({ id, defaultValue, placeholder, options, onChange }) => {
  return (
    <select
      id={id}
      name={id}
      defaultValue={defaultValue}
      className={sx.select}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled selected>
        {placeholder}
      </option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
