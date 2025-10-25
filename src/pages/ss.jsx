import React, { useEffect, useState } from 'react'

const DarsPage = () => {
    const [region, setRegion] = useState([])
    const fetchApi = async() => {
        try{
            const response = await fetch('https://testpsyedu.limsa.uz/region', {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            setRegion(response)
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        fetchApi()
    },[])
  return (
    <div>
        
    </div>
  )
}

export default DarsPage