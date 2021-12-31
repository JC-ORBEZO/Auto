import './App.css';
import React from "react";
import { Container} from "react-bootstrap";
import imagene from './assets/img/imagene.png';
import Header from "./components/Header/";
//import Contacto from "./components/Contacto";
import Main from "./components/Main";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Container>
      <Header titulo="Jose Orbezo" imagene={imagene}/>
      <Main/>
      <Footer/>
    </Container>
  );
}

export default App;
