import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { handleGetUser, handleModalDeleteUser, handleSelectedUser } from '@/redux/userSlice'

import { CardUser, ModalDeleteUser, ModalFormUser } from '@/components'

import sx from './User.module.scss'

export const UserPage = () => {
  const dispatch = useAppDispatch()
  const { dataUser } = useAppSelector((state) => state.counter)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(handleGetUser())
  }, [])

  return (
    <section className={sx.section__user}>
      <div className={sx.user__header}>
        <h2>Usuarios registrados</h2>
      </div>
      <div className={sx.container__users}>
        {dataUser.map((user) => (
          <CardUser
            key={user.id}
            image={user.avatar}
            name={user.userName}
            location={`${user.lat}, ${user.long}`}
            viewButtons
            onClickDetails={() => {
              dispatch(handleSelectedUser(user))
              navigate(`/weather?id=${user.id}`)
            }}
            onClickDelete={() => {
              dispatch(handleModalDeleteUser())
              dispatch(handleSelectedUser(user))
            }}
          />
          //Pequeño comentario para simular cambio
        ))}
      </div>
      <ModalFormUser />
      <ModalDeleteUser />
    </section>
  )
}
