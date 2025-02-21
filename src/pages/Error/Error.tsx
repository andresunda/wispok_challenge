import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/redux/store'

import { Button } from '@/components'

export const Error = () => {
  const navigate = useNavigate()
  const { error } = useAppSelector((state) => state.counter)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '108px',
        gap: '30px',
      }}
    >
      <h1>{error ? '¡Ocurrio un error!' : '¡Pagina no encontrada!'}</h1>
      <Button onClick={() => navigate('/')}>Regresar</Button>
    </div>
  )
}
