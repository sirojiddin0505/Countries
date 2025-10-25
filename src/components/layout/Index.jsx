import React from 'react'
import Header from '../Header/Index'
import Footer from '../Footer/Index'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header/>
        <main className='bg-gray-700 w-full h-screen'>
            <Outlet/>
        </main>
      <Footer />
    </div>
  )
}

export default Layout