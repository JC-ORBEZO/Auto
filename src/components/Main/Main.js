import { Container,Row,Col,Card,Button} from "react-bootstrap";
import shortId from "short-id";
import "./Main.css";
/** */
const proyectos=[
{id:shortId.generate(),card:"card1",url:"https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg",name:"Clothing Store",description:"Sistema de gestión de una tienda de ropa con POO en C++",documentation:"https://github.com/JC-ORBEZO/StoreClothing"},
{id:shortId.generate(),card:"card2",url:"https://media.istockphoto.com/photos/top-view-of-tic-tac-toe-game-on-wooden-toy-blocks-against-orange-picture-id1208578184?k=6&m=1208578184&s=612x612&w=0&h=N2bIUq7qHUKcmOq2-pbsNR3wNGtoYPvySad9JvTIZZk=",name:"Ta-Te-Ti",description:"Juego práctico para ejercitar eventos con JavaScript",documentation:"https://github.com/JC-ORBEZO/TATETI"}, 
{id:shortId.generate(),card:"card3",url:"https://cdn.pixabay.com/photo/2017/07/27/14/36/calculator-2545542_960_720.jpg",name:"Calculator",description:"Ejercicio de eventos y POO en JavaScript",documentation:"https://github.com/JC-ORBEZO/CALCULATOR"}
];

const Main = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">                
                <Col md={7} xs={12}>
                    <h1>Sobre mí</h1>
                    <p>Soy estudiante en UTN - FRGP, donde he adquirido
                        conocimientos base, así como también en el paradigma de programación 
                        orientada a objetos en C++. Complementario a la cursada en la facultad
                        he participado de cursos libres en Desarrollo Web (HTML, CSS y JAVASCRIPT). 
                        Considero tengo una buena base como para adaptarme con facilidad, por lo que actualmente busco 
                        activamente ampliar mis conocimientos prácticos para así seguir impulsando mi 
                        crecimiento en el sector IT.</p>
                    <h2 className="mt-5 item1">Programar y Aprender</h2>
                </Col>
            </Row>
            {/*   */}               
            <Row className="justify-content-center">
            {proyectos.map(proyecto=><Col md={4}  className={proyecto.card} key={proyecto.id}>
                    <Card style={{ width: '18rem' }} className="mt-4">
                        <Card.Img variant="top" src={proyecto.url} />
                        <Card.Body>
                            <Card.Title>{proyecto.name}</Card.Title>
                            <Card.Text>
                                {proyecto.description}
                            </Card.Text>
                            <Button variant="primary" href={proyecto.documentation}>Documentación</Button>
                                                        
                        </Card.Body>
                    </Card>
                </Col>)} 
            </Row>
            <Row className="justify-content-center">                
                <Col md={7} xs={12}>                    
                    <h2 className="mt-5 item1">Proyectos en curso</h2>
                    <p className="mt-3">Actualmente me encuentro repasando y ampliando conceptos de SQL-Server, aprendiendo la sintaxis 
                    de C# en .Net ya que es lo que voy a llevar el próximo cuatrimestre, AGOSTO - NOVIEMBRE 2021, en la tecnicatura. Al
                    venir de un lenguaje como C++ tengo mucho a favor al aprender la sintaxis de C#. 
                    Por otro lado y con la excusa de aprender una tecnología de moda como la biblioteca React, repaso conceptos de HTML,
                    CSS Y JAVASCRIPT.</p>
                </Col>
            </Row>             
        </Container>
      );
}
 
export default Main;