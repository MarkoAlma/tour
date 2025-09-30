import React from 'react'
import { useState } from 'react';
import { getData } from '../utils';
import { useEffect } from 'react';
import TourCard from './TourCard';

const Tours = () => {

  const [adat, setAdat] = useState([])
  useEffect(()=> {
    getData(setAdat)
  }, [])
  adat && console.log(adat);
  

  return (
    <div className='row' style={{display:'flex', alignItems:'center', justifyContent:'center', maxWidth:'100vw'}}>
      {adat && adat.map(obj=> 
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', minHeight:'380px'}} key={obj.id} className='col-md-3 pb-4'><TourCard {...obj}/></div>
      )}
    </div>
  )
}

export default Tours
