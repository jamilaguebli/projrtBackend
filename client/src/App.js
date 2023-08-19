import { Route, Routes } from 'react-router';
import './App.css';
import Navbarrr from './pages/Navbarrr';


import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Loginn from './pages/Loginn';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import RendezVous from './components/RendezVous';


function App() {
 
  
  

  
  return (
   
   
    <>
   <Navbarrr></Navbarrr>
   <Routes>
    <Route path="/login" element={<Loginn></Loginn>}></Route>
    <Route path="/register" element={<Register></Register>}></Route>
    
  <Route path="/me" element={<Dashboard></Dashboard>}></Route>
  <Route path="/RendezVous" element={<RendezVous></RendezVous>}></Route>
   </Routes>
   <ToastContainer></ToastContainer>
   
   
   </>
   
  );
}

export default App;
