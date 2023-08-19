import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {RechercheMedecin, getMedecin} from '../redux/slice/MedecinSlice'
import AddCard from './AddCard'
import { reset } from '../redux/slice/AuthSlice'


function Card() {
    const dispatch=useDispatch()
    const [filt,setFlit]=useState({speciality:"tous",ville:"tous"})
  
    const {medecin,updated}=useSelector(state=>state. medecinReducer)

    useEffect(()=>{
      dispatch(getMedecin());
      dispatch(reset())
    },[updated])
    const handleSearch =(e)=>{
      e.preventDefault()
      console.log(filt)
      dispatch(RechercheMedecin(filt))
 
    }

  return (
   

       
<div>   

<form>    
<label htmlFor="speciality">speciality</label>

<select name="speciality" id="speciality" onChange={(e)=>{setFlit({...filt,speciality:e.target.value})}}>
<option >tous</option>
  <option >Gériatrie</option>
  <option > Génétique médicale</option>
  <option >Addictologie</option>
  <option >Médecine générale</option>
  <option >Pédiatrie</option>
  <option >Hématologie</option>
  <option >aa</option>
</select>
         
        <label htmlFor="City">ville</label>

<select name="City" id="City"  onChange={(e)=>{setFlit({...filt,ville:e.target.value})}}>
<option >tous</option>
  <option >Ariana</option>
  <option > Beja</option>
  <option >Sousse</option>
  <option >Tunis</option>
  <option >Siliana</option>
  <option >Bizerte</option>
  <option >kairouan</option>
</select>
        
          
  <button onClick={handleSearch}>Recherche</button>
  </form>  
        
   



        <div style={{display:"flex" ,gap:"20px", flexWrap:'wrap'}}>
  
            {medecin&& medecin.map(e => <AddCard e={e}></AddCard>)}
            </div>
        </div>

  )
}

export default Card