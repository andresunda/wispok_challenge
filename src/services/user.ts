import axios from 'axios'

import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUser, IWeather } from '@/interfaces'

const apiKey = import.meta.env.VITE_API_KEY_WEATHER

export const getUsers = (): IUser[] => {
  const options: IUser[] = [
    { id: 1, avatar: image1, userName: 'Usuario 1', lat: 20.643422, long: -103.434039 },
    { id: 2, avatar: image2, userName: 'Usuario 2', lat: 20.643422, long: -103.434039 },
    { id: 3, avatar: image3, userName: 'Usuario 3', lat: 20.643422, long: -103.434039 },
    { id: 4, avatar: image4, userName: 'Usuario 4', lat: 20.643422, long: -103.434039 },
    { id: 5, avatar: image5, userName: 'Usuario 5', lat: 20.643422, long: -103.434039 },
    { id: 6, avatar: image6, userName: 'Usuario 6', lat: 20.643422, long: -103.434039 },
    { id: 7, avatar: image7, userName: 'Usuario 7', lat: 20.643422, long: -103.434039 },
    { id: 8, avatar: image8, userName: 'Usuario 8', lat: 20.643422, long: -103.434039 },
  ]
  return options
}

export const getOptionsAvatar = () => {
  const options: { value: string; label: string }[] = [
    { value: image1, label: 'Avatar 1' },
    { value: image2, label: 'Avatar 2' },
    { value: image3, label: 'Avatar 3' },
    { value: image4, label: 'Avatar 4' },
    { value: image5, label: 'Avatar 5' },
    { value: image6, label: 'Avatar 6' },
    { value: image7, label: 'Avatar 7' },
    { value: image8, label: 'Avatar 8' },
  ]
  return options
}

export const fetchWeather = createAsyncThunk('data/fetchWeather', async (user: IUser, thunkAPI) => {
  try {
    const data = await axios.get(`
      https://api.openweathermap.org/data/2.5/weather`, {
      params: { lat: user.lat, lon: user.long, appid: apiKey, units: 'metric' },
    })
    const { main, name, weather, wind, visibility } = data.data

    const date = new Date()
    const formattedDate = date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: 'numeric',
    })

    const weatherGenerate: IWeather = {
      date: formattedDate,
      temp: main.temp,
      place: name,
      weatherName: weather[0].description,
      humidity: main.humidity,
      wind: wind.speed,
      visibility,
    }

    return weatherGenerate
  } catch {
    return thunkAPI.rejectWithValue('Ocurrió un error')
  }
})
