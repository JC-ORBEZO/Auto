import { Container,Row,Col,Card,Button} from "react-bootstrap";
import shortId from "short-id";
import "./Main.css";
const proyectos=[
{id:shortId.generate(),card:"card4",url:"https://media.istockphoto.com/photos/smartphones-on-the-counter-of-a-electronics-store-picture-id1138251272?k=20&m=1138251272&s=612x612&w=0&h=ajF0OuxTslr8Z79CJqS0nG9JTTbOuBGfrKnuIzmsgGs=",name:"Shop Gestor",description:"WinForm .Net Framework / C# / SQL-Server - Sistema Gestor de tienda artículos electrónicos",documentation:"https://github.com/Ant1Dot0/tpi1-orbezo-LiclaCisneros"},
{id:shortId.generate(),card:"card5",url:"https://media.istockphoto.com/photos/shopping-online-concept-shopping-service-on-the-online-web-with-by-picture-id1133980246?k=20&m=1133980246&s=612x612&w=0&h=bwut2YUV7gtnjrv354523xU_9S-TtKQOqGTdiGMsPfs=",name:"Ecommerce",description:"Asp.Net Framework Formulario Web / C# / SQL-Server - Aplicación Web Ecommerce.",documentation:"https://github.com/JC-ORBEZO/WebAppEcommerce"},
{id:shortId.generate(),card:"card6",url:"https://media.istockphoto.com/photos/online-live-video-marketing-concept-picture-id1145887344?k=20&m=1145887344&s=612x612&w=0&h=_O9xkA19V_boKeMgaNwbabIIleeSdN7tdqRBapxP35I=",name:"Web App Movie",description:"Ejercitación para repasar conceptos de React. Muestra y selección de Películas.",documentation:"https://github.com/JC-ORBEZO/AppMovies"},
{id:shortId.generate(),card:"card7",url:"https://media.istockphoto.com/photos/abstract-blurred-background-of-department-store-picture-id689911172?k=20&m=689911172&s=612x612&w=0&h=HIcAL3tAFabtp60_nc4Y2TGR_QYosAmXjRFp1Ds5jgA=",name:"Clothing Store",description:"C / C++ / POO - Sistema de gestión de una tienda de ropa",documentation:"https://github.com/JC-ORBEZO/StoreClothing"},
{id:shortId.generate(),card:"card8",url:"https://media.istockphoto.com/photos/top-view-of-tic-tac-toe-game-on-wooden-toy-blocks-against-orange-picture-id1208578184?k=6&m=1208578184&s=612x612&w=0&h=N2bIUq7qHUKcmOq2-pbsNR3wNGtoYPvySad9JvTIZZk=",name:"Ta-Te-Ti",description:"Html / Css / JavaScript - Juego práctico para ejercitar eventos en JS.",documentation:"https://github.com/JC-ORBEZO/TATETI"}, 
{id:shortId.generate(),card:"card9",url:"https://cdn.pixabay.com/photo/2017/07/27/14/36/calculator-2545542_960_720.jpg",name:"Calculadora",description:"Html / Css / JS - Ejercicio de eventos y POO en JavaScript",documentation:"https://github.com/JC-ORBEZO/CALCULATOR"},
{id:shortId.generate(),card:"card10",url:"https://media.istockphoto.com/photos/checklist-picture-id1168750663?k=20&m=1168750663&s=612x612&w=0&h=mka7rBZRLnI2Ib8yT_h7Lf_sxLcIrm_6HE6bQ_u_HZc=",name:"Todo List",description:"Ejercicio con React - App Registro de Tareas",documentation:"https://github.com/JC-ORBEZO/TodoList-2.0"},
];

const Main = () => {
    return (
        <Container fluid className="mt-5">
            <Row className="justify-content-center">                
                <Col md={10} xs={12}>
                    <h1>Sobre mí</h1>
                    <p>Soy estudiante avanzado de la Tecnicatura Universitaria en Programación en UTN, donde he adquirido
                    fundamentos lógicos con lenguajes de programación orientado a objetos como C/C++ en Code::Blocks y C# en el entorno .Net Framework (WinForms y Asp.Net - Formularios Web).
                    Además del manejo de Bases de Datos relacionales con SQL.</p>
                    <p>
                    También, he participado de cursos libres en Desarrollo Web Frontend y tengo conocimientos de Html, CSS, Javascript y fundamentos en React.                         
                    Por lo que actualmente busco activamente participar en proyectos reales y ampliar mis conocimientos prácticos para así seguir impulsando mi 
                    crecimiento en el sector IT.</p>    
                    <h2 className="mt-5 item1">Repositorio</h2>
                </Col>
            </Row>             
            <Row className="justify-content-center">
            {proyectos.map(proyecto=><Col md={4}  className={proyecto.card} key={proyecto.id}>
                    <Card style={{ width: '25rem',display:'flex'}} className="mt-4">
                        <Card.Img variant="top" src={proyecto.url}/>
                        <Card.Body>
                            <Card.Title>{proyecto.name}</Card.Title>
                            <Card.Text>
                                {proyecto.description}
                            </Card.Text>
                            <Button variant="primary" href={proyecto.documentation}>Repositorio</Button>                                                        
                        </Card.Body>
                    </Card>
                </Col>)} 
            </Row>
            <Row className="justify-content-center" >                
                <Col md={10} xs={12}>                    
                    <h2 className="mt-5 item1" >Proyectos en curso</h2>
                    <p className="mt-3" >Actualmente me encuentro repasando y profundizando conocimientos en React, entendiendo el 
                    funcionamiento de Asp.Net Core 5 con MVC. Que son tecnologías bastante solicitadas en el mercado laboral. Y en busqueda de integrarme 
                    y acelerar mi aprendizaje en una empresa que trabaje con estas tecnologías. 
                    </p>
                </Col>
            </Row>             
        </Container>
      );}
 
export default Main;