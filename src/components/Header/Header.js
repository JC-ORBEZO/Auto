import React from "react";
import "./Header.css";
import PropTypes from 'prop-types';
import {Container,Row,Col} from "react-bootstrap";
import shortId from "short-id";
//const pestañas=[];
const iconos=["fab fa-instagram","fab fa-twitter","fab fa-youtube","fab fa-github","fab fa-linkedin-in","fab fa-stack-overflow"];

const Header = React.memo((props) => {
    const {titulo,imagene}=props;
    return ( 
    <Container>   
        <Row>
        <Col md={5} xs={12}>
        <div className="fotoImagen">
            <img className="imagenPa" src={imagene} alt="oculto"/>
            <h2>Jose Orbezo</h2>
            <h3>{titulo}</h3>
        </div>
        </Col>   
        <Col md={7} xs={12}>
        <div className="menuPrincipal">
            <span>"Inicio"</span>
            <span>"Sobre mi"</span>
            <span>Uses</span>
            <span>Portafolio</span>
            <span>Charlas</span>
            <span>Contacto</span>
        </div>
        </Col>
        <Col md={12}>        
        <p>Soy un estudiante de Programación en la Universidad Tecnológica Nacional - Facultad Regional  General Pacheco</p>
        </Col>        
        <Col md={6}>
        <div>
            <span><i className="fas fa-map-marker-alt"></i> Buenos Aires - Argentina</span>
        </div>
        </Col> 
        <Col md={6}>
        <div>
            {iconos.map(icono=><span key={shortId.generate()}><i className={icono}></i></span>)}
        </div>
        </Col> 
        </Row> 
    </Container> 
    );
});
 
//
Header.propTypes={
    titulo:PropTypes.string.isRequired,
    imagene:PropTypes.any
};

export default Header;