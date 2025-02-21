import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { handleModalUser, handleModalUserSubmit, handleSelectedAvatar } from '@/redux/userSlice'

import { Button, Modal } from '@/components/atoms'
import { InputLabel, MapContainer, ProfileForm } from '@/components/molecules'

import sx from './ModalForm.module.scss'

export const ModalFormUser = () => {
  const dispatch = useAppDispatch()
  const { modal, selectedAvatar, optionsAvatar } = useAppSelector((state) => state.counter)
  // Map anchor
  const [anchor, setAnchor] = useState<[number, number]>([20.6721374, -103.3258491])
  const [lat, setLat] = useState<number>(20.6721374)
  const [long, setLong] = useState<number>(-103.3258491)

  // Update form fields when marker is dragged
  const handleDragEnd = (newAnchor: [number, number]) => {
    setAnchor(newAnchor)
    setLat(newAnchor[0])
    setLong(newAnchor[1])
  }

  return (
    <Modal isOpen={modal} buttonClose onClose={() => dispatch(handleModalUser())}>
      <form onSubmit={(values) => dispatch(handleModalUserSubmit(values))}>
        <div className={sx.container}>
          <div className={sx.modal__content}>
            <h3>Añadir un nuevo usuario</h3>
            <ProfileForm
              idSelect="avatar_select"
              idProfile=""
              placeholder=""
              label="Selecciona tu avatar"
              image={selectedAvatar}
              options={optionsAvatar}
              onChange={(value) => dispatch(handleSelectedAvatar(value))}
            />
            <InputLabel id="userName" label="Usuario" placeholder="Nombre de usuario" />
            <div className={sx.coordinates}>
              <InputLabel id="lat" label="Latitud" placeholder="Ingresa tu latitud" type="number" value={lat} />
              <InputLabel id="long" label="Longitud" placeholder="Ingresa tu longitud" type="number" value={long} />
            </div>
            <MapContainer anchor={anchor} onDragEnd={handleDragEnd} defaultCenter={[20.6637808, -103.4315425]} />
            <Button type="submit" className={sx.button__submit__user}>
              Añadir usuario
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  )
}
