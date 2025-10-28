import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false)
  
  const fetchCountries = async () => {
    setLoading(true)
    try{
       fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags')
      .then(res => res.json())
      .then(data => setCountries(data))
    }catch(error){
      console.log(error);
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCountries()
  }, []);

  return (
    <div className='pt-20 mx-10'>
        <div className='flex justify-between items-center py-4 '>
            <input type="search" placeholder='davlat qidiring'
            className='border border-white/50 p-3 rounded-md focus:outline-none focus:bg-gray-800 bg-gray-900 text-white'/>
            <select 
              className='border border-white/50 p-3 rounded-md focus:outline-none focus:bg-gray-800 bg-gray-900 text-white'>                
                <option value="">Filter</option>
                <option value="">All</option>
                <option value="">Language</option>
            </select>
        </div>

        <div className='text-white flex flex-wrap gap-8 justify-between mt-8 '>
          {countries && countries.map((item) => (
            <div className='w-[300px] overflow-hidden cursor-pointer hover:opacity-95 border border-white/50 bg-gray-900 rounded-lg '>
              <div className=' cursor-pointer border h-[180px]'>
                <img src={item.flags.svg} alt={`Bayroq: ${item.name.common}`}
                  className='w-full h-full hover:scale-105 duration-500 ' />
              </div>
              <div className='mx-6 my-4 flex flex-col gap-2  '>
                <h1 className='text-2xl font-semibold'>{item.name.common}</h1>
                <p><b>Poytaxti:</b> {item.capital}</p>
                <p><b>Aholisi:</b> {item.population} kishi</p>
                <p><b>Mintaqasi:</b> {item.region}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default HomePage