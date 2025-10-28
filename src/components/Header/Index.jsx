import React from 'react'
import rasm from '../../../public/vite.svg'
import { NavLink } from 'react-router-dom'
import { FaRegMoon } from 'react-icons/fa'
import { GoSun } from 'react-icons/go'

const Header = () => {
  return (
    <div className='mx-auto flex justify-between items-center px-10 py-4 bg-gray-950 fixed z-50 right-0 left-0 '>
        <div>
            <NavLink to={'/'}><img src={rasm} alt="" /></NavLink>
        </div>
        <div className='flex gap-4 text-white'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/hero'}>Contact</NavLink>
        </div>
        <div className='flex gap-2'>
          <button className='flex items-center gap-1 py-2 px-4 rounded-lg shadow-sm  cursor-pointer text-black bg-white '>Light Mode <GoSun/></button>
          {/* <button className='flex items-center gap-1 py-2 px-4 rounded-lg shadow-sm border border-white/50 cursor-pointer text-white '>Dark Mode <FaRegMoon /></button> */}
          <select className='border border-white p-2 rounded-lg outline-none text-xl font-bold bg-white'>
            <option value="">Uz</option>
            <option value="">Ru</option>
            <option value="">En</option>
          </select>
        </div>
    </div>
  )
}

export default Header