import React from 'react'
import rasm from '../../../public/vite.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='mx-auto flex justify-between items-center px-10 py-4 bg-gray-900 fixed right-0 left-0 '>
        <div>
            <NavLink to={'/'}><img src={rasm} alt="" /></NavLink>
        </div>
        <div className='flex gap-4 text-white'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/hero'}>Contact</NavLink>
        </div>
        <div>
            <p className='py-2 px-6 rounded-lg shadow-sm border border-white/50 cursor-pointer text-white '>DarkMode</p>
        </div>
    </div>
  )
}

export default Header