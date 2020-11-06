import React from "react";
import { Router } from "react-router-dom";

function Tema13() {
  return (
    <div>
      <p>
        <p>Redes y aplicaciones pares</p>
        <p>REDES ENTRE PARES</p>
        <p>
        En el modelo de red entre pares (P2P), se accede a los datos de un dispositivo par sin utilizar un servidor dedicado.
        </p>
      </p>
      <p>El modelo de red P2P consta de dos partes: las redes P2P y las aplicaciones P2P. Ambas partes tienen características similares, pero en la práctica son muy diferentes.</p>
      <p>En una red P2P, hay dos o más PC que están conectadas por medio de una red y pueden compartir recursos (como impresoras y archivos) sin tener un servidor dedicado. Todo terminal conectado puede funcionar como servidor y como cliente. Un equipo puede asumir la función de servidor para una transacción mientras funciona en forma simultánea como cliente para otra transacción. Las funciones de cliente y servidor se establecen por solicitud.</p>
      <p>En la figura se muestra un ejemplo simple de red P2P. Además de compartir archivos, una red como esta permitiría que los usuarios habiliten juegos en red o compartan una conexión a Internet.</p>
      <div>
        <img src="./images/tema13.png" width="900" class="center" />
      </div>
    </div>
  );
}
export default Tema13;