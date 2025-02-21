import { Outlet } from 'react-router-dom'

import { Button } from '../atoms'

import { useAppDispatch } from '../../redux/store'
import { handleModalUser } from '../../redux/userSlice'

import sx from './Layout.module.scss'

export const Layout = () => {
  const dispatch = useAppDispatch();

  return (
    <main>
      <header className={sx.header}>
        <div>
          <h1>Challenge frontend</h1>
          <Button onClick={() => dispatch(handleModalUser())} className={sx.button}>
            Ingresar usuario
          </Button>
        </div>
      </header>
      <section className={sx.section}>
        <Outlet />
      </section>
    </main>
  )
}
