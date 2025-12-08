import React, { useEffect, useState } from 'react'
import { IoReloadSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCountries = async () => {
    setLoading(true);
    setError('');

    const endpoints = [
      'https://restcountries.com/v3.1/all',
      // 'https://restcountries.com/v3.1/region/asia',
      'https://restcountries.com/v3.1/name/a',
      'https://restcountries.com/v3.1/region/europe'
    ];

    for (let endpoint of endpoints) {
      try {
        const response = await fetch(endpoint);        
        if (response.ok) {
          const data = await response.json();
          setCountries(data);
          setFilteredCountries(data);
          setLoading(false);
          console.log(data);
          
          return;
        }
      } catch (err) {
        console.log('Failed with endpoint:', endpoint, err);
        continue;
      }
    }

    setError('Hech qanday API endpoint ishlamadi');
    setLoading(false);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  }, [searchTerm, countries]);

  return (
    <div className='pt-20 mx-10'>
      <div className='flex justify-center md:justify-between items-center py-2 px-5 gap-4'>
        <button onClick={fetchCountries}
          className='hidden md:flex border cursor-pointer border-white/50 p-3 rounded-md hover:bg-gray-800 bg-gray-900 text-white'>
          <IoReloadSharp/>
        </button>
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="search" 
          placeholder='Davlat qidiring...'
          className='border max-w-[400px] w-full border-white/50 p-3 rounded-md focus:outline-none focus:bg-gray-800 bg-gray-900 text-white'/>
        <button 
          className='hidden md:flex border cursor-pointer border-white/50 py-3 px-8 rounded-md hover:bg-gray-800 bg-gray-900 text-white'>
          Filter
        </button>
      </div>

      {loading && <div className="loader"></div>}
      {error && <div className="text-red-500 text-center text-xl">{error}</div>}

      {!loading && !error && (
        <div className="text-white pt-2 text-center">
          Jami: {filteredCountries.length} ta mamlakat topildi
        </div>
      )}

      <div className='text-white flex flex-wrap gap-8 justify-around mt-6'>
        {filteredCountries.map((item) => (
          <div key={item.cca3} className='w-[330px] overflow-hidden cursor-pointer hover:opacity-95 border border-white/50 bg-gray-900 rounded-lg'>
            <NavLink to={`/country/${item.name.common}`}>
              <div className='cursor-pointer h-[170px] overflow-hidden'>
                <img src={item.flags?.png} loading="lazy" alt={`${item.name?.common} bayrog'i`}
                  className='w-full h-full hover:scale-110 duration-500 object-cover'/>
              </div>
              <div className='mx-6 my-4 flex flex-col gap-2'>
                <h1 className='text-2xl font-semibold'>{item.name?.common}</h1>
                <p><b>Poytaxti:</b> {item.capital?.[0] || 'Mavjud emas'}</p>
                <p><b>Aholisi:</b> {item.population?.toLocaleString()} kishi</p>
                <p><b>Mintaqasi:</b> {item.region}</p>
                {/* <p><b>Chegarasi:</b>{item.borders?.toLocaleString()}</p> */}
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage