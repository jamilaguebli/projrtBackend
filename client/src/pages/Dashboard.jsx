import React from 'react'
import  { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import '../components/style.css';
import Card from '../components/Card';

function Dashboard() {
  const {user}=useSelector(state=>state.auth)
  const navigate=useNavigate()
  useEffect(()=>{

      if(!user){
          navigate('/login')
      }
  }
  ,[user])
  return (
    <>
    <div className='home'>
      <div className='para'>
        Mondocteur vous permet de prendre <br></br>rendez-vous en ligne avec un médecin dans toutes 
        <br></br>les villes en Tunis et c'est gratuit
      </div>
      
    </div>
    
    <Card></Card>
    </>
    
  )
}

export default Dashboard