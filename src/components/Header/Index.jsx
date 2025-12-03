import React, { useState } from 'react'
import rasm from '../../../public/vite.svg'
import { NavLink } from 'react-router-dom'
// import { FaRegMoon } from 'react-icons/fa'
import { GoSun } from 'react-icons/go'
import { IoIosMenu } from 'react-icons/io'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
  <>
    <div className='mx-auto flex justify-between items-center px-10 py-4 bg-gray-950 fixed z-50 right-0 left-0 '>
        <div>
          <NavLink to={'/'}><img src={rasm} alt="" /></NavLink>
        </div>
        <div className='hidden md:flex gap-4 text-white md:ml-20'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/hero'}>Contact</NavLink>
        </div>
        <div className='hidden md:flex gap-2'>
          <button className='flex items-center gap-1 py-2 px-4 rounded-lg shadow-sm  cursor-pointer text-black bg-white '>Light Mode <GoSun/></button>
          {/* <button className='flex items-center gap-1 py-2 px-4 rounded-lg shadow-sm border border-white/50 cursor-pointer text-white '>Dark Mode <FaRegMoon /></button> */}
          <select className='border border-white text-white p-2 rounded-lg outline-none text-md font-bold bg-gray-950'>
            <option value="">UZ</option>
            <option value="">RU</option>
            <option value="">EN</option>
          </select>
        </div>
        <div className='text-white text-3xl md:hidden' onClick={() => setOpenMenu(!openMenu)}>
          <IoIosMenu />
        </div>
    </div>

    {openMenu && (
      <div className='fixed inset-0 z-50 transform duration-400 border'
        onClick={() => setOpenMenu(false)}>
        <div onClick={(e) => e.stopPropagation(e.target.value)}
          className='flex gap-4 flex-col max-w-[300px] bg-gray-900 text-[22px] text-white min-h-screen pt-4'>
          <NavLink className={'px-10'} to={'/'}><img src={rasm} alt="" /></NavLink>
          <hr className='w-full'/>
          <div className='flex flex-col gap-5 px-10 py-4 '>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/hero'}>Contact</NavLink>
            <button 
              className='flex border w-[160px] cursor-pointer border-white/50 p-2 rounded-md hover:bg-gray-800 bg-gray-900 text-white'>
              Qayta yuklash
            </button>
            <button className='flex items-center w-[170px] gap-1 py-2 px-4 rounded-lg shadow-sm cursor-pointer text-black bg-white '>Light Mode <GoSun/></button>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default Header