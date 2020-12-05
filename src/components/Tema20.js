import React from "react";
import { Router } from "react-router-dom";

function Tema20() {
  return (
    <div>
      <p>
        <p>Capa de enlace de datos</p>
        <p>La función de la capa de enlace de datos de OSI es preparar los paquetes de la capa de red para ser transmitidos y controlar el acceso a los medios físicos.</p>
        <p>
        <p>La capa de aplicación provee la interfaz al usuario. </p>
        <p>La capa de transporte es responsable de dividir y manejar las comunicaciones entre los procesos que funcionan en los dos sistemas finales.</p>
        <p>Los protocolos de capa de red organizan nuestros datos de comunicación para que puedan viajar a través de internetworks desde el host que los origina hasta el host destino.</p>
        </p>
      </p>
      <p>TÉCNICAS DE CONTROL DE ACCESO AL MEDIO</p>
      <p>Medios compartidos:
Algunas topologías de red comparten un medio común con varios nodos. En cualquier momento puede haber una cantidad de dispositivos que intentan enviar y recibir datos utilizando los medios de red. Hay reglas que rigen cómo esos dispositivos comparten los medios. 
Hay dos métodos básicos de control de acceso al medio para medios compartidos: 
Controlado: Cada nodo tiene su propio tiempo para utilizar el medio 
Basado en la contención: Todos los nodos compiten por el uso del medio</p>
      <p>Medios no compartidos:
Los protocolos de control de acceso al medio para medios no compartidos requieren poco o ningún control antes de colocar tramas en los medios. Estos protocolos tienen reglas y procedimientos más simples para el control de acceso al medio. Tal es el caso de las topologías punto a punto. 
En las topologías punto a punto, los medios interconectan sólo dos nodos. En esta configuración, los nodos no necesitan compartir los medios con otros hosts ni determinar si una trama está destinada para ese nodo. Por lo tanto, los protocolos de capa de enlace de datos hacen poco para controlar el acceso a medios no compartidos.</p>
      <p>Full Duplex y Half Duplex:
Comunicación half-duplex quiere decir que los dispositivos pueden transmitir y recibir en los medios pero no pueden hacerlo simultáneamente. Ethernet ha establecido reglas de arbitraje para resolver conflictos que surgen de instancias donde más de una estación intenta transmitir al mismo tiempo.
En la comunicación full-duplex, los dos dispositivos pueden transmitir y recibir en los medios al mismo tiempo. La capa de enlace de datos supone que los medios están disponibles para transmitir para ambos nodos en cualquier momento. Por lo tanto, no hay necesidad de arbitraje de medios en la capa de enlace de datos.</p>
      <div>
        <img src="./images/tema20.jpg" width="900" class="center" />
      </div>
      <p>DIRECCIONAMIENTO DEL CONTROL DE ACCESO AL MEDIO Y TRAMADO DE DATOS</p>
<p>La descripción de una trama es un elemento clave de cada protocolo de capa de enlace de datos. Los protocolos de capa de enlace de datos requieren información de control para permitir que los protocolos funcionen. La información de control puede indicar:</p>
<p>Qué nodos están en comunicación con otros</p>
<p>Cuándo comienza y cuándo termina la comunicación entre nodos individuales</p>
<p>Qué errores se producen mientras los nodos se comunican</p>
<p>Qué nodos se comunicarán luego</p>
<p>La Capa de enlace de datos prepara un paquete para transportar a través de los medios locales encapsulándolo con un encabezado y un tráiler para crear una trama.
A diferencia de otros PDU que han sido analizados en este curso, la trama de la capa de enlace de datos incluye:
Datos: El paquete desde la Capa de red,
Encabezado: contiene información de control como direccionamiento y está ubicado al comienzo del PDU,
Tráiler: contiene información de control agregada al final del PDU</p>
<div>
        <img src="./images/tema202.jpg" width="900" class="center" />
      </div>
<p>ESTÁNDARES</p>
<p>A diferencia de los protocolos de las capas superiores del conjunto TCP/IP, los protocolos de capa de enlace de datos generalmente no están definidos por solicitudes de comentarios (RFC). A pesar de que el Grupo de trabajo de ingeniería de Internet (IETF) mantiene los protocolos y servicios funcionales para la suite de protocolos TCP/IP en las capas superiores, la IETF no define las funciones ni la operación de esa capa de acceso a la red del modelo. La capa de acceso de red TCP/IP es el equivalente de las capas de enlace de datos OSI y la física. Estas dos capas se verán en capítulos separados para un análisis más detallado.
Los protocolos y servicios funcionales en la Capa de enlace de datos son descriptos por organizaciones de ingeniería (como IEEE, ANSI y ITU) y compañías en comunicaciones. Las organizaciones de ingeniería establecen estándares y protocolos públicos y abiertos. Las compañías de comunicaciones pueden establecer y utilizar protocolos propios para aprovechar los nuevos avances en tecnología u oportunidades de mercado.
Los servicios y especificaciones de la capa de enlace de datos se definen mediante varios estándares basados en una variedad de tecnologías y medios a los cuales se aplican los protocolos. Algunos de estos estándares integran los servicios de la Capa 2 y la Capa 1.
Las organizaciones de ingeniería que definen estándares y protocolos abiertos que se aplican a la capa de enlace de datos incluyen:</p>
<p>Organización Internacional para la Estandarización (ISO)</p>
<p>Instituto de Ingenieros Eléctricos y Electrónicos (IEEE)</p>
<p>Instituto Nacional Estadounidense de Estándares (ANSI)</p>
<p>Unión Internacional de Telecomunicaciones (ITU)</p>
<div>
        <img src="./images/tema201.jpg" width="900" class="center" />
      </div>
      <p> COMPARACIÓN ENTRE TOPOLOGÍA LÓGICA Y FÍSICA</p>
      <p>La topología de una red es la configuración o relación de los dispositivos de red y las interconexiones entre ellos. Las topologías de red pueden verse en el nivel físico y el nivel lógico.
La topología física es una configuración de nodos y las conexiones físicas entre ellos. La representación de cómo se usan los medios para interconectar los dispositivos es la topología física. Ésta se abarcará en capítulos posteriores de este curso.
Una topología lógica es la forma en que una red transfiere tramas de un nodo al siguiente. Esta configuración consiste en conexiones virtuales entre los nodos de una red independiente de su distribución física. Los protocolos de capa de enlace de datos definen estas rutas de señales lógicas. La capa de enlace de datos "ve" la topología lógica de una red al controlar el acceso de datos a los medios. Es la topología lógica la que influye en el tipo de trama de red y control de acceso a medios utilizados.
La topología física o cableada de una red probablemente no sea la misma que la topología lógica.
La topología lógica de una red está estrechamente relacionada con el mecanismo utilizado para administrar el acceso a la red. Los métodos de acceso proporcionan los procedimientos para administrar el acceso a la red para que todas las estaciones tengan acceso. Cuando varias entidades comparten los mismos medios, deben estar instalados algunos mecanismos para controlar el acceso. Los métodos de acceso son aplicados a las redes para regular este acceso a los medios. </p>
<div>
        <img src="./images/tema203.jpg" width="900" class="center" />
      </div>
    </div>
  );
}
export default Tema20;