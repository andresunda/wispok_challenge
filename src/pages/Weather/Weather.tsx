import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/redux/store'
import { handleGetUser, handleVerifyUser } from '@/redux/userSlice'

import { fetchWeather } from '@/services/user'

import { ArrowLeftIcon, Button, CardUser, DropsIcon, EyeIcon, MapContainer, ModalFormUser, WindIcon } from '@/components'

import sx from './Weather.module.scss'

export const WeatherPage = () => {
  const dispatch = useAppDispatch()
  const { selectedUser, weather, dataUser } = useAppSelector((state) => state.counter)
  const [params] = useSearchParams()

  const navigate = useNavigate()

  const [imageSRC, setImageSRC] = useState('https://i.imgur.com/38Ey9lL.jpg')

  useEffect(() => {
    const id = params.get('id')
    dispatch(handleVerifyUser(id ? Number(id) : 0))
    if (!dataUser.length) dispatch(handleGetUser())
  }, [dataUser])

  useEffect(() => {
    if (selectedUser.id) dispatch(fetchWeather(selectedUser))
  }, [selectedUser])

  const lat = Number(selectedUser.lat)
  const long = Number(selectedUser.long)

  useEffect(() => {
    const conditionsMap: Record<string, string> = {
      cloudy: 'https://i.imgur.com/7hHoCj9.jpg',
      clouds: 'https://i.imgur.com/7hHoCj9.jpg',
      nubes: 'https://i.imgur.com/7hHoCj9.jpg',
      sunny: 'https://i.imgur.com/ku5mifb.jpg',
      clear: 'https://i.imgur.com/SYKakyW.jpg',
      fog: 'https://i.imgur.com/pRwAZLs.jpg',
      mist: 'https://i.imgur.com/pRwAZLs.jpg',
      rain: 'https://i.imgur.com/D3B3Rkn.jpg',
      drizzle: 'https://i.imgur.com/D3B3Rkn.jpg',
      snow: 'https://i.imgur.com/VzNafkc.jpg',
    }

    if (weather) {
      const condition = weather.weatherName.toLowerCase()
      const matchingCondition = Object.keys(conditionsMap).find((key) => condition.includes(key))

      if (matchingCondition) {
        setImageSRC(conditionsMap[matchingCondition])
      } else {
        setImageSRC('https://i.imgur.com/38Ey9lL.jpg')
      }
    }
  }, [weather])

  return (
    <section className={sx.section__weather}>
      <div className={sx.container__header}>
        <Button className={sx.button__back} onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
          Regresar
        </Button>
        <h3>Pronóstico del tiempo</h3>
      </div>
      <div className={sx.container__body}>
        <div className={sx.container__card} style={{ backgroundImage: `url(${imageSRC})` }}>
          <div id="date">{weather.date}</div>
          <div id="temp">{weather.temp} ºC</div>
          <div id="place">{weather.place}</div>
          <div id="weatherName">{weather.weatherName.charAt(0).toUpperCase() + weather.weatherName.slice(1)}</div>

          <Button className={sx.button__weather}>
            <DropsIcon />
            Humedad
            <span>{weather.humidity}%</span>
          </Button>
          <Button className={sx.button__weather}>
            <WindIcon />
            Viento
            <span>{weather.wind} KM/H</span>
          </Button>
          <Button className={sx.button__weather}>
            <EyeIcon />
            Visibilidad
            <span>{weather.visibility} km</span>
          </Button>
        </div>
        <div className={sx.container__user__map}>
          <CardUser
            image={selectedUser.avatar}
            name={selectedUser.userName}
            location={`${selectedUser.lat}, ${selectedUser.long}`}
          />
          <MapContainer height="500px" anchor={[lat, long]} defaultCenter={[lat, long]} />
        </div>
      </div>
      <ModalFormUser/>
    </section>
  )
}
