import React from "react";
import { Link, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Tema1 from "./components/Tema1";
import Tema2 from "./components/Tema2";
import Tema3 from "./components/Tema3";
import Tema4 from "./components/Tema4";
import Tema5 from "./components/Tema5";
import Tema6 from "./components/Tema6";
import Tema7 from "./components/Tema7";
import Tema8 from "./components/Tema8";
import Tema9 from "./components/Tema9";
import Tema10 from "./components/Tema10";
import Tema11 from "./components/Tema11";
import Tema12 from "./components/Tema12";
import Tema13 from "./components/Tema13";
import Tema14 from "./components/Tema14";
import Tema15 from "./components/Tema15";
import Tema16 from "./components/Tema16";
import Tema17 from "./components/Tema17";
import Tema18 from "./components/Tema18";
import Tema19 from "./components/Tema19";
import Tema20 from "./components/Tema20";
import Tema21 from "./components/Tema21";
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
                <li>
                  Tema 7:
                  <Link to="/tema7">Capa de aplicacion</Link>
                </li>
                <li>
                  Tema 8:
                  <Link to="/tema8">Interfaz entre redes</Link>
                </li>
                <li>
                  Tema 9:
                  <Link to="/tema9">Medidas aplicaciones y servicios</Link>
                </li>
                <li>
                  Tema 10:
                  <Link to="/tema10">Modelo cliente servidor</Link>
                </li>
                <li>
                  Tema 11:
                  <Link to="/tema11">Servidores</Link>
                </li>
                <li>
                  Tema 12:
                  <Link to="/tema12">Protocolos y servicios de capa aplicacion</Link>
                </li>
                <li>
                  Tema 13:
                  <Link to="/tema13">Redes y aplicaciones pares</Link>
                </li>
                <li>
                  Tema 14:
                  <Link to="/tema14">Capa de transporte</Link>
                </li>
                <li>
                  Tema 15:
                  <Link to="/tema15">Funciones de la capa de transporte</Link>
                </li>
                <li>
                  Tema 16:
                  <Link to="/tema16">Protocolo TCP</Link>
                </li>
                <li>
                  Tema 17:
                  <Link to="/tema17">Administracion de sesiones TCP</Link>
                </li>
                <li>
                  Tema 18:
                  <Link to="/tema18">Protocolo UDP</Link>
                </li>
                <li>
                  Tema 19:
                  <Link to="/tema19">Capa de red</Link>
                </li>
                <li>
                  Tema 20:
                  <Link to="/tema20">Capa enlace de datos</Link>
                </li>
                <li>
                  Tema 21:
                  <Link to="/tema21">Capa fisica</Link>
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
            <Route exact path="/tema7">
              <Tema7 />
            </Route>
            <Route exact path="/tema8">
              <Tema8 />
            </Route>
            <Route exact path="/tema9">
              <Tema9 />
            </Route>
            <Route exact path="/tema10">
              <Tema10 />
            </Route>
            <Route exact path="/tema11">
              <Tema11 />
            </Route>
            <Route exact path="/tema12">
              <Tema12 />
            </Route>
            <Route exact path="/tema13">
              <Tema13 />
            </Route>
            <Route exact path="/tema14">
              <Tema14 />
            </Route>
            <Route exact path="/tema15">
              <Tema15 />
            </Route>
            <Route exact path="/tema16">
              <Tema16 />
            </Route>
            <Route exact path="/tema17">
              <Tema17 />
            </Route>
            <Route exact path="/tema18">
              <Tema18 />
            </Route>
            <Route exact path="/tema19">
              <Tema19 />
            </Route>
            <Route exact path="/tema20">
              <Tema20 />
            </Route>
            <Route exact path="/tema21">
              <Tema21 />
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
