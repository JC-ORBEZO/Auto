import './App.css';
import React from "react";
import imagene from './assets/img/imagene.png';
import Header from "./components/Header/";
import Contacto from "./components/Contacto";
import Main from "./components/Main";
function App() {
  return (
    <>
      <Header titulo="Jose Orbezo" imagene={imagene}/>   
      {/**
      MODELO A SEGUIR  =>  https://fmontes.com/es/about
       */}
       <Main/>
       <Contacto title="Contacto:"/>
    </>
  );
}

export default App;
