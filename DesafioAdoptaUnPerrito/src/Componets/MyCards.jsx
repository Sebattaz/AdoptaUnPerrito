import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boton from './Tags';

const Tarjeta = (props) =>{
    return(
      <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                   <Card.Text>
                    {props.description}
                    </Card.Text>
                <Boton bg={props.bg}
                        raza={props.raza} />
            </Card.Body>
        </Card>

     </>

    )

}
export default Tarjeta