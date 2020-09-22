import React from "react";
import { Router } from "react-router-dom";

function Tema5() {
  return (
    <div>
      <p>
        <p>Direccionamiento de red</p>
        El direccionamiento es una función clave de los protocolos de capa de
        Red que permite la transmisión de datos entre hosts de la misma red o en
        redes diferentes. El Protocolo de Internet versión 4 (IPv4) ofrece
        direccionamiento jerárquico para paquetes que transportan datos.
        Diseñar, implementar y administrar un plan de direccionamiento IPv4
        efectivo asegura que las redes puedan operar de manera eficaz y
        eficiente.
      </p>
      <p>
        <p>Estructura</p>
        Cada dispositivo de una red debe ser definido en forma exclusiva. En la
        capa de red es necesario identificar los paquetes de la transmisión con
        las direcciones de origen y de destino de los dos sistemas finales. Con
        IPv4, esto significa que cada paquete posee una dirección de origen de
        32 bits y una dirección de destino de 32 bits en el encabezado de Capa
        3. Estas direcciones se usan en la red de datos como patrones binarios.
        Dentro de los dispositivos, la lógica digital es aplicada para su
        interpretación. Para quienes formamos parte de la red humana, una serie
        de 32 bits es difícil de interpretar e incluso más difícil de recordar.
        Por lo tanto, representamos direcciones IPv4 utilizando el formato
        decimal punteada.
      </p>
      <div>
        <img src="./images/tema5.jpg" width="350" class="center" />
      </div>
    </div>
  );
}
export default Tema5;
