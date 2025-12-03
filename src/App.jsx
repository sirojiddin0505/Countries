import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Index'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import CountryDetails from './pages/CountryDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
        <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/hero' element={<ContactPage />} />
          <Route path='/country/:name' element={<CountryDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App