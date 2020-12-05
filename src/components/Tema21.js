import React from "react";
import { Router } from "react-router-dom";

function Tema21() {
  return (
    <div>
      <p>
        <p>Capa fisica</p>
        <p>La función de la capa física de OSI es la de codificar en señales los dígitos binarios que representan las tramas de la capa de Enlace de datos, además de transmitir y recibir estas señales a través de los medios físicos (alambres de cobre, fibra óptica o medio inalámbrico) que conectan los dispositivos de la red.</p>
      </p>
      <p>SEÑALES DE COMUNICACIÓN</p>
      <div>
        <img src="./images/tema21.jpg" width="900" class="center" />
      </div>
      <p>La capa física de OSI proporciona los medios de transporte para los bits que conforman la trama de la capa de Enlace de datos a través de los medios de red. Esta capa acepta una trama completa desde la capa de Enlace de datos y lo codifica como una secuencia de señales que se transmiten en los medios locales. Un dispositivo final o un dispositivo intermedio recibe los bits codificados que componen una trama.
El envío de tramas a través de medios de transmisión requiere los siguientes elementos de la capa física:</p>
      <p>Medios físicos y conectores asociados.</p>
      <p>Una representación de los bits en los medios.</p>
      <p>Codificación de los datos y de la información de control.</p>
      <p>Sistema de circuitos del receptor y transmisor en los dispositivos de red.</p>
      <p>En este momento del proceso de comunicación, la capa de transporte ha segmentado los datos del usuario, la capa de red los ha colocado en paquetes y luego la capa de enlace de datos los ha encapsulado como tramas. El objetivo de la capa física es crear la señal óptica, eléctrica o de microondas que representa a los bits en cada trama. Luego, estas señales se envían por los medios una a la vez.
Otra función de la capa física es la de recuperar estas señales individuales desde los medios, restaurarlas para sus representaciones de bit y enviar los bits hacia la capa de Enlace de datos como una trama completa.</p>
<p>Funcionamiento</p>
<p>Los medios no transportan la trama como una única entidad. Los medios transportan señales, una por vez, para representar los bits que conforman la trama.
Existen tres tipos básicos de medios de red en los cuales se representan los datos:</p>
<p>Cable de cobre</p>
<p>Fibra</p>
<p>Inalambrico</p>
      <div>
        <img src="./images/tema211.jpg" width="900" class="center" />
      </div>
      <p>ESTÁNDARES</p>
<p>La capa física consiste en un hardware creado por ingenieros en forma de conectores, medios y circuitos electrónicos. Por lo tanto, es necesario que las principales organizaciones especializadas en ingeniería eléctrica y en comunicaciones definan los estándares que rigen este hardware.
Por el contrario, las operaciones y los protocolos de las capas superiores de OSI se llevan a cabo mediante un software y están diseñados por especialistas informáticos e ingenieros de software. Como vimos en el capítulo anterior, el grupo de trabajo de ingeniería de Internet (IETF) define los servicios y protocolos del conjunto TCP/IP en las RFC. 

Al igual que otras tecnologías asociadas con la capa de Enlace de datos, las tecnologías de la capa física se definen por diferentes organizaciones, tales como:</p>
<p>La Organización Internacional para la Estandarización (ISO) </p>
<p>El Instituto de Ingenieros Eléctricos y Electrónicos (IEEE)</p>
<p>El Instituto Nacional Estadounidense de Estándares (ANSI) </p>
<p>La Unión Internacional de Telecomunicaciones (ITU) </p>
<p>La Asociación de Industrias Electrónicas/Asociación de la Industria de las Telecomunicaciones (EIA/TIA)</p>
<p>Autoridades de las telecomunicaciones nacionales, como la Comisión Federal de Comunicaciones (FCC) en EE.UU.</p>
<p>Hardware y tecnologías de la Capa física</p>
<div>
        <img src="./images/tema212.jpg" width="900" class="center" />
      </div>
      <p>SEÑALIZACIÓN Y CODIFICACIÓN FÍSICA</p>
      <p>Codificación:
La codificación es un método utilizado para convertir un stream de bits de datos en un código predefinido. Los códigos son grupos de bits utilizados para ofrecer un patrón predecible que pueda reconocer tanto el emisor como el receptor. La utilización de patrones predecibles permite distinguir los bits de datos de los bits de control y ofrece una mejor detección de errores en los medios.
Además de crear códigos para los datos, los métodos de codificación en la capa física también pueden proporcionar códigos para control, como la identificación del comienzo y el final de una trama. El host que realiza la transmisión transmitirá el patrón específico de bits o un código para identificar el comienzo y el final de la trama.</p>
    <p>Señalización
La capa física debe generar las señales inalámbricas, ópticas o eléctricas que representan el "1" y el "0" en los medios. El método de representación de bits se denomina método de señalización. Los estándares de capa física deben definir qué tipo de señal representa un "1" y un "0". Esto puede ser tan sencillo como un cambio en el nivel de una señal eléctrica, un impulso óptico o un método de señalización más complejo.</p>
<div>
        <img src="./images/tema213.jpg" width="900" class="center" />
      </div>
    </div>
  );
}
export default Tema21;