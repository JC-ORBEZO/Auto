import React from "react";
import "./Header.css";
//import PropTypes from 'prop-types';
import {Container,Row,Col,Nav} from "react-bootstrap";
import shortId from "short-id";
//const pestañas=[];
/*
const iconos=[
    {id:shortId.generate(),url: "fab fa-instagram",name:"instagram",href:"https://github.com/JC-ORBEZO"},
    {id:shortId.generate(),url:"fab fa-twitter",name:"twitter",href:"https://github.com/JC-ORBEZO"},
    {id:shortId.generate(),url:"fab fa-youtube",name:"youtube",href:"https://github.com/JC-ORBEZO"},
    {id:shortId.generate(),url:"fab fa-github",name:"git",href:"https://github.com/JC-ORBEZO"},
    {id:shortId.generate(),url:"fab fa-linkedin-in",name:"linkedin",href:"https://www.linkedin.com/in/jose-orbezo-20bb1b184"},
    {id:shortId.generate(),url:"fab fa-stack-overflow",name:"overflow",href:"https://github.com/JC-ORBEZO"},
    {id:shortId.generate(),url:"fab fa-stack-overflow",name:"overflow",href:"https://github.com/JC-ORBEZO"},
    {id:shortId.generate(),url:"fab fa-stack-overflow",name:"overflow",href:"https://github.com/JC-ORBEZO"}];
*/
    /*const items=[
    {id:shortId.generate(),name:"Ta-Te-Ti",url:"https://distracted-mcnulty-147d23.netlify.app/"},
    {id:shortId.generate(),name:"Calculator",url:"https://keen-franklin-c5322e.netlify.app/"},
    {id:shortId.generate(),name:"Portafolio",url:"https://github.com/JC-ORBEZO"},
    {id:shortId.generate(),name:"Uses",url:"https://jc-orbezo.netlify.app/"},
    {id:shortId.generate(),name:"Charlas",url:"https://jc-orbezo.netlify.app/"},
    {id:shortId.generate(),name:"Contacto",url:"https://jc-orbezo.netlify.app/"}];*/
const Header = React.memo((props) => {
    const {titulo,imagene}=props;
    return ( 
    <Container className="mt-2">   
        <Row>
        <Col md={5} xs={12} className="fotoImagen">        
            <img className="imagenPa" src={imagene} alt="oculto"/>
            <h2>{titulo}</h2>
        </Col>   
        <Col md={6} xs={12} className="menuPrincipal">
            <Nav>
                {/*items.map(item=>
                <Nav.Item key={item.id}>
                    <Nav.Link href={item.url} className="text-primary">{item.name}</Nav.Link>
                </Nav.Item>)*/}                
            </Nav>
        </Col>
        <Col md={12} className="Titular">        
        <p>Tecnicatura Universitaria en Programación</p>
        </Col>        
        <Col md={6} xs={12} className="Ubicacion">
            <span><i className="fas fa-map-marker-alt"></i> Buenos Aires - Argentina</span>
        </Col> 
        <Col md={6} xs={12} className="Iconos">
            {/*iconos.map(icono=><span key={icono.id} className={icono.name}><a href={icono.href}><i className={icono.url}></i></a></span>)*/}
            
        </Col> 
        </Row> 
    </Container> 
    );
});
 
/*
Header.propTypes={
    titulo:PropTypes.string.isRequired,
    imagene:PropTypes.any}
};*/

export default Header;