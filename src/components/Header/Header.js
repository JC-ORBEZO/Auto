import React from "react";
import "./Header.css";
import PropTypes from 'prop-types';

const iconos=["fab fa-instagram","fab fa-twitter","fab fa-youtube","fab fa-github","fab fa-linkedin-in","fab fa-stack-overflow"];

const Header = React.memo((props) => {
    const {titulo,imagene}=props;
    return ( 
    <>        
        <div className="fotoImagen">
            <img className="imagenPa" src={imagene} alt="oculto"/>
            <h2>Jose Orbezo</h2>
            <h3>{titulo}</h3>
        </div>
        <div className="menuPrincipal">
            <span>Inicio</span>
            <span>Sobre mi</span>
            <span>Uses</span>
            <span>Portafolio</span>
            <span>Charlas</span>
            <span>Contacto</span>
        </div>
        <p>Soy un estudiante de Programación en la Universidad Tecnológica Nacional - Facultad Regional  General Pacheco</p>
        <div>
            <span><i className="fas fa-map-marker-alt"></i> Buenos Aires - Argentina</span>
        </div>
        <div>
            {iconos.map(icono=><span><i className={icono}></i></span>)}
        </div>
    </> 
    );
});
 
//
Header.propTypes={
    titulo:PropTypes.string.isRequired,
    imagene:PropTypes.any
};

export default Header;