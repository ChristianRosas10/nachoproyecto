import React from "react";
import { Router } from "react-router-dom";
import "./../App.css";

function Home() {
  return (
    <div>
      <h1>
        <center>
          <p>
            Hola Bienvenidos, Disfruten de la introduccion a las redes de
            comunicacion y modelos de referencia
          </p>
          <p>Impartido por Christian Antonio Ibarra Rosas de IDS</p>
        </center>
      </h1>
      <div>
        <img src="./images/cetilogo.jpg" width="500" class="center" />
      </div>
    </div>
  );
}
export default Home;
