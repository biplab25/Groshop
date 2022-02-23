import './App.css';
import React from 'react';
import {Container} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter,Route,Routes } from "react-router-dom";


const  App=()=> {
  return (
    <>
    <BrowserRouter>
    <Header />
          <main>
            <Container>
              <Routes>
                <Route path="/"  element= {<Homescreen />} />
                <Route path="/product/:id"  element= {<ProductScreen />} />
              </Routes>
            </Container>
          </main> 
      <Footer />
    </BrowserRouter>
    
    </>
  );
}

export default App;
