import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./paginas/home";
import Aboutme  from "./paginas/aboutme";
import NotFound  from "./paginas/notFound";
import Layout from './componentes/layout';
import RickandMorty from './paginas/rickandmorty';

function App() {
  return ( 
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home" component={ Home} />
          <Route exact path="/aboutme" component={  Aboutme} />
          <Route exact path="/rick" component={ RickandMorty} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;