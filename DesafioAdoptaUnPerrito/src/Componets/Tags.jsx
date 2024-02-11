import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Boton =(props)=>{
    return(
        <Button variant={props.bg}>{props.raza}</Button>
    )

}

export default Boton