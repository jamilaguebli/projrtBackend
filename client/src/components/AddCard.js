import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import '../components/style.css';
function AddCard({e}) {
  return (
    <div  className='d-flex' >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.image} />
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <Card.Text>
         {e.speciality}
        </Card.Text>
        <Card.Text>
         {e.email}
        </Card.Text>
        <Card.Text>
         {e.ville}
        </Card.Text>
        
        <NavLink to='/RendezVous'><Button variant="primary">Go somewhere</Button></NavLink>
      </Card.Body>
    </Card>
    </div>
  );
}

export default AddCard;