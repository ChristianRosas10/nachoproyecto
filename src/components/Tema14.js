import React from "react";
import { Router } from "react-router-dom";

function Tema14() {
  return (
    <div>
      <p>
        <p>Capa de transporte</p>
        <p>El nivel de transporte o capa de transporte es el cuarto nivel del modelo OSI,1​ y está encargado de la transferencia libre de errores de los datos entre el emisor y el receptor, aunque no estén directamente conectados, así como de mantener el flujo de la red. Es la base de toda la jerarquía de protocolo. La tarea de esta capa es proporcionar un transporte de datos confiable y económico de la máquina de origen a la máquina destino, independientemente de las de redes físicas en uno.2​ Sin la capa transporte, el concepto total de los protocolos en capas tendría poco sentido.</p>
        <p>
        La meta final de la capa de transporte es proporcionar un servicio eficiente, confiable y económico a sus usuarios, que normalmente son procesos de la capa de aplicación. Para lograr este objetivo, la capa de transporte utiliza los servicios proporcionados por la capa de red. El hardware o software de la capa de transporte que se encarga del transporte se llama entidad de transporte, la cual puede estar en el núcleo del sistema operativo, en un proceso independiente, en un paquete de biblioteca o en la tarjeta de red.
        </p>
      </p>
      <p>Hay dos tipos de servicio en la capa de transporte, orientado y no orientado a la conexión. En el servicio orientado a la conexión consta de tres partes: establecimiento, transferencia de datos, y liberación. En el servicio no orientado a la conexión se tratan los paquetes de forma individual.</p>
      <p>Es la primera capa que lleva a cabo la comunicación extremo a extremo, y esta condición ya se mantendrá en las capas superiores..</p>
      <p>Para permitir que los usuarios accedan al servicio de transporte, la capa de transporte debe proporcionar algunas operaciones a los programas de aplicación, es decir, una interfaz del servicio de transporte. Cada servicio de transporte tiene su propia interfaz. Con el propósito de ver los aspectos básicos, en esta sección examinaremos primero un servicio de transporte sencillo y su interfaz</p>
      <p>El servicio de transporte es parecido al servicio en red, pero hay algunas diferencias importantes. La principal, es que, el propósito del servicio de red es modelar el servicio ofrecido por las redes reales, con todos sus problemas. Las redes reales pueden perder paquetes, por lo que generalmente el servicio no es confiable. En cambio, el servicio de transporte (orientado a la conexión) si es confiable. Claro que las redes reales no están libres de errores, pero ese es precisamente el propósito de la capa de transporte: ofrecer un servicio confiable en una red no confiable.</p>
      <div>
        <img src="./images/tema14.jpg" width="900" class="center" />
      </div>
    </div>
  );
}
export default Tema14;