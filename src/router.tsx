import { Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import { Error, UserPage, WeatherPage } from './pages'

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={'/'} element={<UserPage />} />
        <Route path={'/weather'} element={<WeatherPage />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  )
}
