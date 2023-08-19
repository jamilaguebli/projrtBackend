import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState, useEffect } from 'react';
import { login } from '../redux/slice/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {reset} from '../redux/slice/AuthSlice';
import { toast } from  'react-toastify';

function Loginn() {
  const [userData,setUser]=useState({})
  const {user,Error,message}=useSelector(state=>state.auth)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const signup=(e)=>{
      e.preventDefault()
      dispatch(login(userData))
    }
    useEffect(()=>{

      if(user)
      navigate('/me')

      if(Error){
          toast.error(message)
          dispatch(reset())
      }
   
     
  },[user,Error])
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"onChange={(e)=>{
            setUser({...userData, email:e.target.value})
          }}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e)=>{
            setUser({...userData, password:e.target.value})
          }}/>
    </Form.Group>
   
    <Button variant="primary" type="submit" onClick={signup}>
      Submit
    </Button>
  </Form>
);
}
  

  
  

export default Loginn