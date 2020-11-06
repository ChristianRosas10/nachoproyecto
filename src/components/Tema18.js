import React from "react";
import { Router } from "react-router-dom";

function Tema18() {
  return (
    <div>
      <p>
        <p>Protocolo UDP</p>
        <p>El protocolo de datagramas de usuario, abreviado como UDP, es un protocolo que permite la transmisión sin conexión de datagramas en redes basadas en IP. Para obtener los servicios deseados en los hosts de destino, se basa en los puertos que están listados como uno de los campos principales en la cabecera UDP. Como muchos otros protocolos de red, UDP pertenece a la familia de protocolos de Internet, por lo que debe clasificarse en el nivel de transporte y, en consecuencia, se encuentra en una capa intermedia entre la capa de red y la capa de aplicación.</p>
        <p>
        Mediante el protocolo de datagramas de usuario, una aplicación puede enviar información muy rápidamente, ya que no es necesario establecer una conexión con el receptor ni esperar una respuesta. Sin embargo, no hay garantía de que los paquetes vayan a llegar completos y respetando el orden en el que fueron enviados. Además, este protocolo no ofrece ninguna protección frente a la alteración o acceso por parte de terceros. Sin embargo, el UDP puede añadir opcionalmente una suma de verificación (que es obligatoria en IPv6) que permite detectar los paquetes defectuosos.
        </p>
      </p>
      <p>El protocolo UDP funciona sin conexión: el protocolo UDP se caracteriza porque permite el envío de datagramas a través de la red sin que se haya establecido previamente una conexión entre el emisor y el receptor. Los datagramas respectivos se envían a la dirección IP preferida de la secuencia especificando el puerto de destino, sin que sea necesario que el ordenador asociado al mismo tenga que dar una respuesta. No obstante, cuando los paquetes tienen que ser devueltos al emisor, existe la posibilidad de incluir en la cabecera UDP información sobre el puerto de origen.</p>
      <p>UDP utiliza puertos: al igual que el TCP, el protocolo UDP utiliza puertos para permitir que los datagramas se transfieran a los protocolos correctos, es decir, a las aplicaciones elegidas del sistema de destino. Los puertos quedan definidos mediante un número conforme a un rango de valores válidos, estando reservado el rango de 0 a 1023 para los servicios fijos.</p>
      <p>El protocolo UDP permite una comunicación rápida y sin retardos: el protocolo de transporte es el adecuado para una transmisión de datos rápida debido a que no hay que llevar a cabo una configuración de la conexión. Esto resulta también del hecho de que la pérdida de un paquete individual afecta exclusivamente a la calidad de la transmisión. En el caso de conexiones TCP, en cambio, se intenta reenviar de nuevo los paquetes perdidos de forma automática, lo que provoca que todo el proceso de transmisión se detenga.</p>
      <p>El protocolo UDP no ofrece ninguna garantía de seguridad e integridad de los datos: la ausencia de acuse de recibo mutuo entre el emisor y el receptor garantiza que la velocidad de transmisión en el protocolo UDP sea excelente; no obstante, el protocolo no puede garantizar la seguridad ni la integridad de los datagramas. Tampoco puede garantizar el orden de los paquetes enviados. Por ello, los servicios que utilizan UDP deben aplicar sus propias medidas de corrección y protección.</p>
      <div>
        <img src="./images/tema18.png" width="900" class="center" />
      </div>
    </div>
  );
}
export default Tema18;