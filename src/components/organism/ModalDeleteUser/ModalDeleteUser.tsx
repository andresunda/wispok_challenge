import { useAppDispatch, useAppSelector } from '@/redux/store'
import { handleDeleteUser, handleModalDeleteUser, handleModalUserSubmit } from '@/redux/userSlice'

import { Button, Modal } from '@/components/atoms'
import { CardUser } from '@/components/molecules'

import sx from './ModalDeleteUser.module.scss'

export const ModalDeleteUser = () => {
  const dispatch = useAppDispatch(); 
  const { modalDelete, selectedUser } = useAppSelector((state) => state.counter)

  return (
    <Modal isOpen={modalDelete}>
      <form onSubmit={(values) => dispatch(handleModalUserSubmit(values))}>
        <div className={sx.container}>
          <div className={sx.modal}>
            <h3>Eliminar usuario</h3>

            <CardUser
              image={selectedUser.avatar}
              name={selectedUser.userName}
              location={`${selectedUser.lat}, ${selectedUser.long}`}
            />

            <div className={sx.confirm__delete}>
              <h5>¿Deseas eliminar el usuario?</h5>

              <div className={sx.user__buttons}>
                <Button onClick={() => dispatch(handleDeleteUser(selectedUser.id))} className={sx.button__delete__user}>
                  Eliminar usuario
                </Button>
                <Button onClick={() => dispatch(handleModalDeleteUser())} className={sx.button__keep__user}>
                  Mantener usuario
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  )
}
