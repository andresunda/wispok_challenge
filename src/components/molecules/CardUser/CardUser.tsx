import { FC } from 'react'

import { Button, DeleteIcon, LocationIcon, ProfilePicture } from '@/components/atoms'

import sx from './CardUser.module.scss'

interface ICardUser {
  image: string
  name: string
  location: string
  viewButtons?: boolean
  onClickDetails?: () => void
  onClickDelete?: () => void
}

export const CardUser: FC<ICardUser> = ({ image, name, location, viewButtons, onClickDetails, onClickDelete }) => {
  return (
    <div className={sx.container}>
      <ProfilePicture id="proof" image={image} className={sx.container__image} />
      <div className={sx.container__info}>
        <h3>{name}</h3>
        <div className={sx.container__location}>
          <LocationIcon />
          <span>{location}</span>
        </div>
        {viewButtons && (
          <div className={sx.container__buttons}>
            <Button onClick={onClickDetails} className={sx.button__details}>
              Detalles
            </Button>
            <Button onClick={onClickDelete} className={sx.button__delete}>
              <DeleteIcon />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
