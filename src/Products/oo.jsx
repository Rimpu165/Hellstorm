import React, { useEffect, useState } from 'react'
import axios from 'axios'

const oo = () => {
     const [data,setData]=useState([]);
    const [loading, setLoading]=useState(true);
    const[error, setError]=useState(null);

    useEffect(()=>{
        const fetch=async()=>{
            try{
                const respo= await axios.get('https://api.escuelajs.co/api/v1/products')
                setData(respo.data)  
            }catch(err){
                setError(err.message)
                setLoading(false);
            }
        }
        fetch()
    },[])
    if(loading){
        return <div>loading...</div>
    }
    if(error){
        return <div>error!!!!</div>
    }

     
  return (
    <div>
      <h1>product list</h1>
      <ul>
        <li key={Products.id}>
             
        </li>
      </ul>
    </div>
  )
}

export default oo
