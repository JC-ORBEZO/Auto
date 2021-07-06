import { Container,Row,Col,Card,Button} from "react-bootstrap";
import shortId from "short-id";
import "./Main.css";
/** */
const proyectos=[{id:shortId.generate(),card:"card1",url:"https://placeimg.com/640/480/tech/grayscale",name:"Clothing Store",description:"Sistema de gestión de una tienda de ropa"},
{id:shortId.generate(),card:"card2",url:"https://placeimg.com/640/480/tech/sepia?t=1625501062672",name:"Ta-Te-Ti",description:"asdasdasdadasdas"}
,{id:shortId.generate(),card:"card3",url:"https://placeimg.com/640/480/tech",name:"Calculator",description:"asdasdasdadasdas"}];

const Main = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">                
                <Col md={7} xs={12}>
                    <h1>Sobre mí</h1>
                    <p>Soy estudiante en UTN - FRGP. He adquirido
                         conocimientos base, así como también en el paradigma de programación 
                         orientada a objetos en C++. Complementario a la cursada en la facultad
                          he participado de cursos libres en Desarrollo Web (HTML, CSS, JAVASCRIPT)
                         y actualmente me voy adentrando en el manejo de la librería REACT. 
                         Considero tengo 
                         una buena base como para adaptarme con facilidad, por lo que actualmente busco 
                         activamente ampliar mis conocimientos prácticos para así seguir impulsando mi 
                         crecimiento en el sector IT.</p>
                    <h2 className="mt-5 item1">Programar y Aprender</h2>
                </Col>
            </Row>
            {/*   */}               
            <Row className="justify-content-center mt-3">
            {proyectos.map(proyecto=><Col md={4}  className={proyecto.card}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={proyecto.url} />
                        <Card.Body>
                            <Card.Title>{proyecto.name}</Card.Title>
                            <Card.Text>
                                {proyecto.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>)} 
            </Row>             
        </Container>
      );
}
 
export default Main;