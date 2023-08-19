import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slice/AuthSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddMedecin from '../components/AddMedecin';
function Navbarrr() {
  const {user}=useSelector(state=>state.auth)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const signoff=()=>{
    dispatch(logout())

  }
  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  },[user])
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Mondocteur</Navbar.Brand>
          <Nav className="d-flex end" >
        {!user?<>   <NavLink to='/login'> login</NavLink>
           <NavLink to='/register'> register</NavLink>
           </>:
         <>  <NavLink to='/me'> dashboard</NavLink>
         <div style={{display:"flex",width:"100%",justifyContent:"flex-end"}}>
         <button onClick={signoff} >logout</button>
         <AddMedecin></AddMedecin>
            </div></>   }

          </Nav>
        
        </Container>
      </Navbar>
      
       
    </>
  );
}

export default Navbarrr;