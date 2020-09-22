import React from "react";
import { Link, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Tema1 from "./components/Tema1";
import Tema2 from "./components/Tema2";
import Tema3 from "./components/Tema3";
import Tema4 from "./components/Tema4";
import Tema5 from "./components/Tema5";
import Tema6 from "./components/Tema6";
import Home from "./components/Home";
import "./App.css";

const hist = createBrowserHistory();

function App(props) {
  return (
    <Router history={hist}>
      <div>
        <section>
          <header>
            <img src="./images/christian.png" width="300" />
            <div>
              <ul>
                <li>
                  Tema 1: <Link to="/tema1">Elementos de Comunicacion</Link>
                </li>
                <li>
                  Tema 2: <Link to="/tema2">Componentes de la red</Link>
                </li>
                <li>
                  Tema 3: <Link to="/tema3">Topologias de redes</Link>
                </li>
                <li>
                  Tema 4:
                  <Link to="/tema4">
                    Modelo de un sistema de comunicaciones
                  </Link>
                </li>
                <li>
                  Tema 5:
                  <Link to="/tema5">Direccionamiento de red</Link>
                </li>
                <li>
                  Tema 6:
                  <Link to="/tema6">Modelos de referencia</Link>
                </li>
              </ul>
            </div>
          </header>
        </section>
        <section>
          <Switch>
            <Route exact path="/tema1">
              <Tema1 />
            </Route>
            <Route exact path="/tema2">
              <Tema2 />
            </Route>
            <Route exact path="/tema3">
              <Tema3 />
            </Route>
            <Route exact path="/tema4">
              <Tema4 />
            </Route>
            <Route exact path="/tema5">
              <Tema5 />
            </Route>
            <Route exact path="/tema6">
              <Tema6 />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
