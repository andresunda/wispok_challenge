import { FC, useState } from 'react'

import sx from './ProfilePicture.module.scss'

interface IProfilePicture {
  id: string
  image: string
  className?: string
}

export const ProfilePicture: FC<IProfilePicture> = ({ id, image, className }) => {
  const [errorImg, setErrorImg] = useState<boolean>(false)

  return (
    <>
      {!errorImg && image ? (
        <img
          src={image}
          alt={id}
          className={`${sx.picture} ${className}`}
          onError={() => setErrorImg(true)}
          loading="lazy"
        />
      ) : (
        <div className={className} />
      )}
    </>
  )
}
