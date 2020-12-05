import React from "react";
import { Router } from "react-router-dom";

function Tema19() {
  return (
    <div>
      <p>
        <p>Capa de red</p>
        <p>La Capa de red o Capa 3 de OSI provee servicios para intercambiar secciones de datos individuales a través de la red entre dispositivos finales identificados. Para realizar este transporte de extremo a extremo la Capa 3 utiliza cuatro procesos básicos:</p>
        <p>
        <p>direccionamiento</p>
        <p>encapsulamiento</p>
        <p>enrutamiento </p>
        <p>desencapsulamiento</p>
        </p>
      </p>
      <p>Direccionamiento:
Primero, la Capa de red debe proveer un mecanismo para direccionar estos dispositivos finales. Si las secciones individuales de datos deben dirigirse a un dispositivo final, este dispositivo debe tener una dirección única. En una red IPv4, cuando se agrega esta dirección a un dispositivo, al dispositivo se lo denomina host. </p>
      <p>Encapsulación:
Segundo, la capa de Red debe proveer encapsulación. Los dispositivos no deben ser identificados sólo con una dirección; las secciones individuales, las PDU de la capa de Red, deben, además, contener estas direcciones. Durante el proceso de encapsulación, la Capa 3 recibe la PDU de la Capa 4 y agrega un encabezado o etiqueta de Capa 3 para crear la PDU de la Capa 3. Cuando nos referimos a la capa de Red, denominamos paquete a esta PDU. Cuando se crea un paquete, el encabezado debe contener, entre otra información, la dirección del host hacia el cual se lo está enviando. A esta dirección se la conoce como dirección de destino. El encabezado de la Capa 3 también contiene la dirección del host de origen. A esta dirección se la llama dirección de origen. Después de que la Capa de red completa el proceso de encapsulación, el paquete es enviado a la capa de enlace de datos que ha de prepararse para el transporte a través de los medios.</p>
      <p>Enrutamiento:
Luego, la capa de red debe proveer los servicios para dirigir estos paquetes a su host destino. Los host de origen y destino no siempre están conectados a la misma red. En realidad, el paquete podría recorrer muchas redes diferentes. A lo largo de la ruta, cada paquete debe ser guiado a través de la red para que llegue a su destino final. Los dispositivos intermediarios que conectan las redes son los routers. La función del router es seleccionar las rutas y dirigir paquetes hacia su destino. A este proceso se lo conoce como enrutamiento.</p>
      <p>Desencapsulamiento
Finalmente, el paquete llega al host destino y es procesado en la Capa 3. El host examina la dirección de destino para verificar que el paquete fue direccionado a ese dispositivo. Si la dirección es correcta, el paquete es desencapsulado por la capa de Red y la PDU de la Capa 4 contenida en el paquete pasa hasta el servicio adecuado en la capa de Transporte. </p>
      <div>
        <img src="./images/tema19.jpg" width="900" class="center" />
      </div>
      <p>PROTOCOLOS DE LA CAPA DE RED</p>
<p>IPv4: La versión 4 de IP (IPv4) es la versión de IP más ampliamente utilizada. Es el único protocolo de Capa 3 que se utiliza para llevar datos de usuario a través de Internet y es el tema de CCNA.

El Protocolo de Internet fue diseñado como un protocolo con bajo costo. Provee sólo las funciones necesarias para enviar un paquete desde un origen a un destino a través de un sistema interconectado de redes. El protocolo no fue diseñado para rastrear ni administrar el flujo de paquetes. Estas funciones son realizadas por otros protocolos en otras capas.

Características básicas de IPv4:

Sin conexión: No establece conexión antes de enviar los paquetes de datos.
Máximo esfuerzo (no confiable): No se usan encabezados para garantizar la entrega de paquetes.
Medios independientes: Operan independientemente del medio que lleva los datos.</p>
<p>IPv6:
El Protocolo de Internet versión 6, en inglés: Internet Protocol version 6 (IPv6), es una versión del Internet Protocol (IP), definida en el RFC 2460 y diseñada para reemplazar a Internet Protocol version 4 (IPv4) RFC 791, que a 2016 se está implementado en la gran mayoría de dispositivos que acceden a Internet.
IPv6 es una extensión conservadora de IPv4. La mayoría de los protocolos de transporte -y aplicación- necesitan pocos o ningún cambio para operar sobre IPv6; las excepciones son los protocolos de aplicación que integran direcciones de capa de red, como FTP o NTP.
IPv6 especifica un nuevo formato de paquete, diseñado para minimizar el procesamiento del encabezado de paquetes. Debido a que las cabeceras de los paquetes IPv4 e IPv6 son significativamente distintas, los dos protocolos no son interoperables.
Algunos de los cambios de IPv4 a IPv6 más relevantes son:
Capacidad extendida de direccionamiento
Autoconfiguración de direcciones libres de estado (SLAAC)
Multicast
Seguridad de Nivel de Red obligatoria
Procesamiento simplificado en los routers
Movilidad
Soporte mejorado para las extensiones y opciones
Jumbogramas</p>
<p>IPX:
IPX. Son las siglas en inglés de Internetwork Packet Exchange (Intercambio de Paquetes Interred). Es un protocolo de la capa de red de Netware responsable de transferir datos entre el servidor y los programas de las estaciones de trabajo mediante datagramas.
IPX es un antiguo protocolo de red de Novell perteneciente al sistema operativo NetWare. Se utiliza para transmitir datos a través de la red, incluyendo en cada paquete la dirección de destino. Es un protocolo de datagramas rápido orientado a comunicaciones sin conexión.
Características:
IPX es un protocolo de la Capa de red (nivel 3 del modelo OSI).
Está orientado a paquetes y a comunicaciones sin conexión (no requiere que se establezca una conexión antes de que los paquetes se envíen a su destino).
Es utilizado como mensajero del protocolo SPX, ya que por sí solo carece de fiabilidad durante el transporte de paquetes.
La cabecera de los paquetes de IPX se compone de 30 bytes, y los datos que junto con la cabecera no pueden sobrepasar los 1518 bytes.
Sistema de direccionamiento IPX</p>
<div>
        <img src="./images/tema191.jpeg" width="900" class="center" />
      </div>
      <p>ENRUTAMIENTO Y SUS CARACTERÍSTICAS</p>
      <p>El enrutamiento requiere que cada salto o router a lo largo de las rutas hacia el destino del paquete tenga una ruta para reenviar el paquete. De otra manera, el paquete es descartado en ese salto. Cada router en una ruta no necesita una ruta hacia todas las redes. Sólo necesita conocer el siguiente salto en la ruta hacia la red de destino del paquete.
La tabla de enrutamiento contiene información que un router usa en sus decisiones al reenviar paquetes. Para las decisiones de enrutamiento, la tabla de enrutamiento necesita representar el estado más preciso de rutas de red a las que el router puede acceder. La información de enrutamiento desactualizada significa que los paquetes no pueden reenviarse al siguiente salto más adecuado, causando demoras o pérdidas de paquetes.
Esta información de ruta puede configurarse manualmente en el router o aprenderse dinámicamente a partir de otros routers en la misma internetwork. Después de que se configuran las interfaces de un router y éstas se vuelven operativas, se instala la red asociada con cada interfaz en la tabla de enrutamiento como una ruta conectada directamente.</p>
    <p> ENRUTAMIENTO ESTÁTICO:

Las rutas a redes remotas con los siguientes saltos asociados se pueden configurar manualmente en el router. Esto se conoce como enrutamiento estático. Una ruta default también puede ser configurada estáticamente.
Si el router está conectado a otros routers, se requiere conocimiento de la estructura de internetworking. Para asegurarse de que los paquetes están enrutados para utilizar los mejores posibles siguientes saltos, cada red de destino necesita tener una ruta o una ruta default configurada. Como los paquetes son reenviados en cada salto, cada router debe estar configurado con rutas estáticas hacia los siguientes saltos que reflejan su ubicación en la internetwork.
Además, si la estructura de internetwork cambia o si se dispone de nuevas redes, estos cambios tienen que actualizarse manualmente en cada router. Si no se realiza la actualización periódica, la información de enrutamiento puede ser incompleta e inadecuada, causando demoras y posibles pérdidas de paquetes.</p>
<div>
        <img src="./images/tema192.jpg" width="900" class="center" />
      </div>
    <p>ENRUTAMIENTO DINÁMICO:

Aunque es esencial que todos los routers en una internetwork posean conocimiento actualizado, no siempre es factible mantener la tabla de enrutamiento por configuración estática manual. Por eso, se utilizan los protocolos de enrutamiento dinámico. Los protocolos de enrutamiento son un conjunto de reglas por las que los routers comparten dinámicamente su información de enrutamiento. Como los routers advierten los cambios en las redes para las que actúan como gateway, o los cambios en enlaces entre routers, esta información pasa a otros routers. Cuando un router recibe información sobre rutas nuevas o modificadas, actualiza su propia tabla de enrutamiento y, a su vez, pasa la información a otros routers. De esta manera, todos los routers cuentan con tablas de enrutamiento actualizadas dinámicamente y pueden aprender sobre las rutas a redes remotas en las que se necesitan muchos saltos para llegar. La figura muestra un ejemplo de rutas que comparten un router.
Entre los protocolos de enrutamiento comunes se incluyen:
Protocolo de información de enrutamiento (RIP),
Protocolo de enrutamiento de gateway interior mejorado (EIGRP), y
Open Shortest Path First (OSPF).</p>
    </div>
  );
}
export default Tema19;