import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchWeather, getOptionsAvatar, getUsers } from '../services/user'
import { IUser } from '../interfaces/IUser'
import { IWeather } from '../interfaces/IWeather'

const savedUsers = localStorage.getItem('users');

const initialUser: IUser = {
  id: 0,
  avatar: '',
  userName: '',
  lat: 0,
  long: 0,
}

const initialWeather: IWeather = {
  date: '',
  temp: 0,
  place: '',
  weatherName: '',
  humidity: 0,
  wind: 0,
  visibility: 0,
}

// Tipos para el estado del slice
interface CounterState {
  dataUser: IUser[]
  modal: boolean
  modalDelete: boolean
  loading: boolean
  error: boolean
  selectedAvatar: string
  selectedUser: IUser
  weather: IWeather
  optionsAvatar: { value: string; label: string }[]
}

// Estado inicial
const initialState: CounterState = {
  dataUser: savedUsers ? JSON.parse(savedUsers) : [],
  modal: false,
  modalDelete: false,
  loading: false,
  error: false,
  selectedAvatar: getOptionsAvatar()[0].value,
  selectedUser: initialUser,
  weather: initialWeather,
  optionsAvatar: getOptionsAvatar(),
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    handleGetUser: (state) => {
      const users: IUser[] = getUsers()
      state.dataUser = users 
    },
    handleModalUser: (state) => {
      state.modal = !state.modal
      state.selectedAvatar = getOptionsAvatar()[0].value
    },
    handleModalDeleteUser: (state) => {
      state.modalDelete = !state.modalDelete
      if (!state.modalDelete) state.selectedUser = initialUser
    },
    handleSelectedUser: (state, action: PayloadAction<IUser>) => {
      state.selectedUser = action.payload
    },
    handleSelectedAvatar: (state, action: PayloadAction<string>) => {
      state.selectedAvatar = action.payload
    },
    handleVerifyUser: (state, action: PayloadAction<number>) => {
      const findUser = state.dataUser.find((e) => e.id === action.payload)
      if (findUser) state.selectedUser = findUser
    },

    handleModalUserSubmit: (state, action: PayloadAction<React.FormEvent<HTMLFormElement>>) => {
      action.payload.preventDefault()
      const formData = new FormData(action.payload.currentTarget)
      const avatar = formData.get('avatar_select') as string
      const userName = formData.get('userName') as string
      const lat = formData.get('lat') as string
      const long = formData.get('long') as string

      if( !avatar || !userName || !lat || !long ){
        state.error = true
        return console.log("Debes agregar info")
      }

      const newUser: IUser = {
        id: state.dataUser.length + 1,
        avatar,
        userName,
        lat: Number(lat),
        long: Number(long),
      }
      state.dataUser = [...state.dataUser, newUser]
      localStorage.setItem('users', JSON.stringify(state.dataUser))
      state.modal = false
    },

    handleDeleteUser: (state, action: PayloadAction<number>) => {
      const filterUsers = state.dataUser.filter((user) => user.id !== action.payload)
      state.dataUser = filterUsers
      localStorage.setItem('users', JSON.stringify(state.dataUser))
      state.modalDelete = false
      state.selectedUser = initialUser
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false
        state.weather = action.payload
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  },
})

// Exporta las acciones
export const {
  handleGetUser,
  handleModalUser,
  handleModalDeleteUser,
  handleSelectedUser,
  handleModalUserSubmit,
  handleSelectedAvatar,
  handleDeleteUser,
  handleVerifyUser,
} = userSlice.actions

// Exporta el reducer
export default userSlice.reducer
