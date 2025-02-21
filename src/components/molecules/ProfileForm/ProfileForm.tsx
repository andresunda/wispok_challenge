import { FC } from 'react'

import { ProfilePicture } from '@/components/atoms'
import { SelectLabel } from '@/components/molecules'

import sx from './ProfileForm.module.scss'

interface IProfileForm {
  idProfile: string
  idSelect: string
  placeholder: string
  label: string
  image: string
  options: { value: string; label: string }[]
  onChange: (value: string) => void
}

export const ProfileForm: FC<IProfileForm> = ({
  idProfile,
  idSelect,
  placeholder,
  label,
  image,
  options,
  onChange,
}) => {
  return (
    <div className={sx.container}>
      <ProfilePicture id={idProfile} image={image} />
      <SelectLabel
        id={idSelect}
        defaultValue={image}
        label={label}
        placeholder={placeholder}
        options={options}
        onChange={onChange}
      />
    </div>
  )
}
