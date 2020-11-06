import React from "react";
import { Router } from "react-router-dom";

function Tema16() {
  return (
    <div>
      <p>
        <p>Protocolo TCP</p>
        <p>El protocolo TCP es un acuerdo estandarizado de transmisión de datos entre distintos participantes de una red informática. La historia de este protocolo se remonta hasta el año 1973, cuando los informáticos Robert E. Kahn y Vinton G. Cerf publicaron su primera versión en el marco de su trabajo de investigación. No obstante, tuvieron que pasar otros ocho años para que se estandarizara con el documento RFC 793. Desde entonces, se ha ido sucediendo una serie de mejoras y ampliaciones, aunque el núcleo del producto se mantiene sin cambios hasta hoy en día. La versión actual, publicada en el RFC 7323 es del año 2014.</p>
        <p>
        El estado actual de desarrollo del protocolo TCP permite establecer una conexión entre dos puntos terminales en una red informática común que posibilite un intercambio mutuo de datos. En este proceso, cualquier pérdida de datos se detecta y resuelve, por lo que se considera un protocolo fiable. Dentro de la familia de protocolos de Internet, el TCP, junto con el UDP y el SCTP forma el grupo de los protocolos de transporte, que, según el modelo OSI, se ubican en la capa de transporte dentro de la arquitectura de red. Como el protocolo TCP se combina casi en todos los casos con el protocolo de Internet (IP) y esta conexión forma la base de la gran mayoría de redes locales y servicios de red, es común hablar del conjunto de protocolos TCP/IP, aunque en realidad se haga referencia a la familia de protocolos de Internet.
        </p>
      </p>
      <p>El protocolo de control de transmisión permite la transmisión de información en ambas direcciones. Por lo tanto, los sistemas informáticos que se comunican mediante TCP pueden enviar y recibir datos de forma simultánea, como si se tratase de una llamada telefónica. En este contexto, las unidades de transmisión básicas de las que echa mano el protocolo son segmentos (paquetes) que, aparte de los datos de uso, también pueden contener información de control y están limitados a un tamaño de 1500 bytes. El establecimiento y la interrupción de las conexiones, que se pueden catalogar como conexiones de terminal a terminal, así como la transmisión de datos en sí, la realiza el software TCP en la pila de protocolos de red del sistema operativo correspondiente.</p>
      <p>El software TCP se activa mediante distintas aplicaciones de red, como los navegadores de red o los servidores, a través de interfaces específicas. Cada conexión se debe identificar siempre claramente mediante dos puntos terminales definidos (cliente y servidor). En este contexto, qué lado desempeña el papel de cliente y cuál el de servidor es indiferente. Lo que importa es que el software TCP cuente con una pareja ordenada de dirección IP y puerto (también denominada “2-tupla” o “socket”) en cada punto terminal.</p>
      <div>
        <img src="./images/tema16.png" width="900" class="center" />
      </div>
    </div>
  );
}
export default Tema16;