import React from "react";
import { Router } from "react-router-dom";

function Tema10() {
  return (
    <div>
      <p>
        <p>Administracion de sesiones TCP</p>
        <div>
        <img src="./images/tema17.jpg" width="900" class="center" />
      </div>
        <p>Cuando los servicios envían datos mediante el TCP, los segmentos pueden llegar a su destino en desorden. Para que el receptor comprenda el mensaje original, los datos en estos segmentos se reensamblan en el orden original. Para lograr esto, se asignan números de secuencia en el encabezado de cada paquete. </p>
        <p>
        Durante la configuración de la sesión, se establece un número de secuencia inicial (ISN). Este número de secuencia inicial representa el valor de inicio para los bytes de esta sesión que se transmitirán a la aplicación receptora. A medida que se transmiten los datos durante la sesión, el número de secuencia se incrementa en el número de bytes que se han transmitido. Este rastreo de bytes de datos permite que cada segmento se identifique y se envíe acuse de recibo de manera exclusiva. Se pueden identificar segmentos perdidos. 
        </p>
      </p>
    </div>
  );
}
export default Tema10;