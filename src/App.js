import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import EscolhaDeHeroi from "./components/EscolhaDeHeroi";
import Home from "./components/Home";
import Pagina404 from "./paginas/Pagina404";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {


  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/escolha_de_heroi'>
          <EscolhaDeHeroi />
        </Route>
        <Route>
          <Pagina404/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
