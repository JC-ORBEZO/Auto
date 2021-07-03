import './App.css';
import React from "react";
import imagene from './assets/img/imagene.png';
import Header from "./components/Header/";
import Contacto from "./components/Contacto";
function App() {
  return (
    <>
      <Header titulo="Titu" imagene={imagene}/>   
      {/**
      MODELO A SEGUIR  =>  https://fmontes.com/es/about
       */}
       <Contacto title="Contacto:"/>
    </>
  );
}

export default App;
