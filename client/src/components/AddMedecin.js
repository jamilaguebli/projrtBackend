import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { addMedecin } from '../redux/slice/MedecinSlice';
import CloudinaryUploadWidget from './CloudinaryUploadWidge';



function AddMedecin() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch()
 const addMed =(e)=>{
    e.preventDefault()
    console.log(movie)
    dispatch(addMedecin(movie))


    setShow(false)
 }

  const [movie,setMovie]=useState({})
  



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ADD Medecin
      </Button>

      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>
          <Form>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
              <Form.Control
                type="text"
                placeholder="image"
                autoFocus
                onChange={(e)=>{setMovie({...movie,image:e.target.value})}}
              />
{/*               <CloudinaryUploadWidget></CloudinaryUploadWidget>
 */}              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
              <Form.Control
                type="name"
                placeholder="name"
                autoFocus
                onChange={(e)=>{setMovie({...movie,name:e.target.value})}}
              />
              </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e)=>{setMovie({...movie,email:e.target.value})}}
              />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
              <Form.Control
                type="speciality"
                placeholder="speciality"
                autoFocus
                onChange={(e)=>{setMovie({...movie,speciality:e.target.value})}}
              />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
              <Form.Control
                type="ville"
                placeholder="ville"
                autoFocus
                onChange={(e)=>{setMovie({...movie,ville:e.target.value})}}
              />
            </Form.Group>
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMed} >
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  
}

export default AddMedecin;