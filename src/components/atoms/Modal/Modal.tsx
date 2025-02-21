import { FC } from 'react'

import { Button } from '../Button/Button'
import { CloseIcon } from '../Icons/CloseIcon'

import sx from './Modal.module.scss'

interface IModal {
  isOpen: boolean
  buttonClose?: boolean
  onClose?: () => void
  children?: React.ReactNode
}

export const Modal: FC<IModal> = ({ isOpen, buttonClose, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className={sx.overlay}>
      <div className={sx.content} onClick={(e) => e.stopPropagation()}>
        {buttonClose && (
          <div className={sx.header}>
            <Button onClick={onClose} className={sx.button__close}>
              <CloseIcon />
            </Button>
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  )
}
