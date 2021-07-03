import {useState} from "react";
import {Container,Row, Col, Form, Button} from "react-bootstrap";
import shortId from "short-id";
const Contacto = () => {
    /*const banana={
        nombre:"",
        email:"",
        telefono:"",
        mensaje:"",
    }*/

    const [tasks,setTasks]=useState([]);

    const createTask=(e)=>{
        e.preventDefault();
        console.log(e);
        console.log(e.target);
        console.log(e.target.elements);
        let [uno,dos,tres]=e.target.elements;
        console.log(uno);
        console.log(uno.value);
        console.log(dos);
        console.log(dos.value);
        console.log(tres);
        console.log(tres.value);
        uno=uno.value.trim();
        dos=dos.value.trim();
        tres=tres.value.trim();
        console.log(uno);
        console.log(dos);
        console.log(tres);
        setTasks([...tasks,{id:shortId.generate(),nombre:uno,email:dos,tres}]);
        e.target.reset();
    }
    return (
        <Container>
        <Row className="justify-content-center mt-5">
        <Col md={6} xs={12} className="mt-5">
        <Form onSubmit={createTask}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name="nombre"/>    
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email"/>    
            </Form.Group>            
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} name="mensaje"/>
            </Form.Group>
  
        <Button className="mt-2" variant="primary" type="submit">
            Enviar
        </Button>
    </Form>
    </Col>
    </Row>
    </Container>
    );
}
 
export default Contacto;