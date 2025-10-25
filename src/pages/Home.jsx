import React from 'react'

const HomePage = () => {
  return (
    <div className='pt-20 mx-10'>
        <div className='flex justify-between items-center py-4'>
            <input type="search" placeholder='davlat qidiring'
            className='border border-white/50 p-3 rounded-md focus:outline-none focus:bg-gray-800 bg-gray-900 text-white'/>
            <select 
              className='border border-white/50 p-3 rounded-md focus:outline-none focus:bg-gray-800 bg-gray-900 text-white'>                
                <option disabled value="">Davlatlar Filteri</option>
                <option value="">Hammasi</option>
                <option value="">Yevropa</option>
                <option value="">Osiyo</option>
                <option value="">Amerika</option>
                <option value="">Afrika</option>
                <option value="">Okeaniya</option>
            </select>
        </div>
    </div>
  )
}

export default HomePage