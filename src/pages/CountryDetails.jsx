import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'

const CountryDetails = () => {
    const {name} = useParams()
    const [country, setCountry] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()

    const fetchCountry = async() => {
        try{
            const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,capital,region,population,flags,languages,currencies,area,maps`);
            const data = await res.json()
            setCountry(data[0])
            console.log(data[0]);
            
        }catch(error){
            console.log(`Xatolik ro'y berdi: ${error}`)
        }
    }

    useEffect(() => {
        fetchCountry()
        
    }, [name])

    const handleBack = (() => {
        if(location.key !== 'default'){
            navigate(-1)
        }else{
            navigate('/')
        }
    })

    if(!country){
        return <div className='loader'></div>
    }
    
  return (
    <section className='pt-18'>
        <div onClick={handleBack} className='text-white text-7xl ml-6'>
            <IoIosArrowRoundBack />
        </div>
        
        <div className="text-white p-5 border border-white/60 rounded-md max-w-[1200px] mx-10 flex gap-4">
            <div className='border border-white/20 p-2 rounded-md'>
                <img className="w-70 h-40 rounded-md"
                  src={country.flags.svg} alt={country.flags.alt} />
                <h1 className='text-3xl border border-white/30 p-1 my-3 rounded-md font-[600] pb-2'>{country.name.common}</h1>
                <p className='border border-white/30 p-1 rounded-md'><b>Poytaxti:</b> {country.capital}</p>
            </div>
            <div className='border border-white/40 rounded-lg p-3 flex gap-[6px] flex-col'>
                <p className='border border-white/30 p-1 rounded-md'><b>To'liq nomi:</b> {country.name.official}</p>
                <p className='border border-white/30 p-1 rounded-md'><b>Aholisi:</b> {country.population?.toLocaleString()} kishi</p>
                <p className='border border-white/30 p-1 rounded-md'><b>Hududi:</b> {country.area?.toLocaleString()} km²</p>
                <p className='border border-white/30 p-1 rounded-md'><b>Mintaqasi:</b> {country.region}</p>
                <p className='border border-white/30 p-1 rounded-md'><b>Tillar:</b> {Object.values(country.languages).join(", ")}</p>
                <p className='border border-white/30 p-1 rounded-md'><b>Valyuta:</b> {Object.values(country.currencies)[0].name}</p>
                <a className="border border-white/30 p-1 rounded-md text-blue-400 "
                  href={country.maps.googleMaps}  rel="noreferrer">
                   Xaritada ko‘rish
                </a>
            </div>
            <div className='border border-white/60 p-3 rounded-lg'>
              <iframe
                src={country.maps.googleMaps}
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Country Map"
                className='rounded-md '>
              </iframe>
            </div>
        </div>
    </section>
  )
}

export default CountryDetails