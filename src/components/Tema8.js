import React from "react";
import { Router } from "react-router-dom";

function Tema8() {
  return (
    <div>
      <p>
        <p>Interfaz entre redes</p>
        <p>
        La capa de interfaz de red TCP/IP formatea los datagramas IP de la capa de red en paquetes que las tecnologías de red específicas pueden interpretar y transmitir.

Una interfaz de red es el software específico de red que se comunica con el controlador de dispositivo específico de red y la capa IP a fin de proporcionar a la capa IP una interfaz coherente con todos los adaptadores de red que puedan estar presentes.

La capa IP selecciona la interfaz de red apropiada basándose en la dirección de destino del paquete que se debe transmitir. Cada interfaz de red tiene una dirección de red. La capa de interfaz de red es responsable de añadir o eliminar cualquier cabecera de protocolo de capa de enlace necesaria para entregar un mensaje a su destino. El controlador de dispositivo de adaptador de red controla la tarjeta adaptadora de red.

Aunque no es necesario, una interfaz de red se suele asociar con un adaptador de red. Por ejemplo, la interfaz de bucle de retorno no tiene ningún adaptador de red asociado. Una máquina debe tener una tarjeta adaptadora de red para cada red (no tipo de red) a la que se conecta. Sin embargo, una máquina sólo necesita una copia del software de interfaz de red para cada adaptador de red que utiliza. Por ejemplo, si un sistema principal se conecta a dos Redes en anillo, debe tener dos tarjetas adaptadoras de red. Sin embargo, sólo se necesita una copia del software de interfaz de Red en anillo y una copia del controlador de dispositivo de Red en anillo.
        </p>
      </p>
      <p>Configuración automática de interfaces de red
Cuando se instala físicamente en el sistema un adaptador de red nuevo, el sistema operativo añade automáticamente la interfaz de red apropiada para dicho adaptador.</p>
      <p>Valores de configuración predeterminados para TCP/IP
En cada arranque de sistema, el sistema operativo configura automáticamente el software de interfaz de red basándose en la información de la base de datos ODM. Inicialmente, la interfaz de red se configura con valores predeterminados.</p>
      <p>Implicaciones de varias interfaces de red en la misma red
Si se conectan varias interfaces de red a una sola red, cada interfaz debe tener una dirección IP exclusiva.</p>
      <p>Gestión de interfaz de red
Para gestionar interfaces de red, utilice la Red WSM, la Vía rápida (aplicación) o las tareas de esta tabla.</p>
      <p>Opciones de red específicas de interfaz
Para lograr un rendimiento de red de alta velocidad (100 Mb o más) bueno, se deben ajustar especialmente las interfaces TCP/IP. Este esfuerzo se complica por el hecho de que en un solo sistema se pueden utilizar varias interfaces de red y una combinación de interfaces TCP/IP tradicionales y de alta velocidad.</p>
      <div>
        <img src="./images/tema8.png" width="600" class="center" />
      </div>
    </div>
  );
}
export default Tema8;