import React from "react";
import { Router } from "react-router-dom";

function Tema2() {
  return (
    <div>
      <p>
      Tarjeta de red.- es un dispositivo que conecta el ordenador u otro equipo con el medio físico. La tarjeta NIC (Network Interface Card) es un tipo de tarjeta de expansión que proporciona un puerto para conectar el cable de red. En ocasiones también es necesario conectar un transceptor ya que no es posible la conexión directa.
      </p>
      <p>
      Concentrador o hub.- es un equipo que permite estructurar el cableado de las redes. La variedad de tipos y características de estos equipos es muy grande y actualmente incluyen funciones.
      </p>
      <p>
      Puente o Bridge.- es un equipo que une dos redes actuando sobre los protocolos de bajo nivel (nivel de control de acceso al medio). Solo el tráfico de una red que va dirigido a la otra atraviesa el dispositivo, lo que permite a dividir las redes en segmentos lógicos, descargando de tráfico las interconexiones. Los bridges producen las señales, con lo cual no se transmite ruido a través de ellos.
      </p>
      <p>
      Enrutador.- es un dispositivo de interconexión de redes que actúa a nivel de los protocolos de red. Permite utilizar varios sistemas de interconexión mejorando el rendimiento de la transmisión entre redes. Su funcionamiento es más lento que los bridges pero su capacidad es mayor. Permiten, incluso, enlazar dos redes basadas en un protocolo, por medio de otra que utilice un protocolo diferente.
      </p>
      <p>
      Pasarela o Gateway.- se utiliza para interconectar redes con protocolos y arquitecturas completamente diferentes a todos los niveles de comunicación. Sin embargo, tienen poca velocidad de transmisión ya que tienen que traducir las unidades de información.
      </p>
      <p>
      Módem.- es un dispositivo que permite a los ordenadores comunicarse entre sí a través de líneas telefónicas gracias a la modulación y demodulación de señales electrónicas que pueden ser procesadas. Los módems pueden ser externos o internos.
      </p>
      <div>
      <img src="./images/tema2.png" width="650" class="center"/>
      </div>
    </div>
  );
}
export default Tema2;
