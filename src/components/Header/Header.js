import React from "react";
import "./Header.css";
import PropTypes from 'prop-types';
import {Container,Row,Col,Nav} from "react-bootstrap";
import shortId from "short-id";
//const pestañas=[];
const iconos=[{id:shortId.generate(),url: "fab fa-instagram",name:"instagram"},{id:shortId.generate(),url:"fab fa-twitter",name:"twitter"},{id:shortId.generate(),url:"fab fa-youtube",name:"youtube"},{id:shortId.generate(),url:"fab fa-github",name:"git"},{id:shortId.generate(),url:"fab fa-linkedin-in",name:"linkedin"},{id:shortId.generate(),url:"fab fa-stack-overflow",name:"overflow"},{id:shortId.generate(),url:"fab fa-stack-overflow",name:"overflow"},{id:shortId.generate(),url:"fab fa-stack-overflow",name:"overflow"}];
const items=[{id:shortId.generate(),name:"Inicio",url:""},{id:shortId.generate(),name:"Sobre Mí",url:"/home"},{id:shortId.generate(),name:"Uses",url:""},{id:shortId.generate(),name:"Portafolio",url:"https://github.com/JC-ORBEZO"},{id:shortId.generate(),name:"Charlas",url:""},{id:shortId.generate(),name:"Contacto",url:""}];
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
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                {items.map(item=>
                <Nav.Item key={item.id}>
                    <Nav.Link href={item.url}>{item.name}</Nav.Link>
                </Nav.Item>)}                
            </Nav>
        </Col>
        <Col md={12} className="Titular">        
        <p>Tecnicatura Universitaria en Programación</p>
        </Col>        
        <Col md={6} xs={12} className="Ubicacion">
            <span><i className="fas fa-map-marker-alt"></i> Buenos Aires - Argentina</span>
        </Col> 
        <Col md={6} xs={12} className="Iconos">
            {iconos.map(icono=><span key={icono.id} className={icono.name}><i className={icono.url}></i></span>)}
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