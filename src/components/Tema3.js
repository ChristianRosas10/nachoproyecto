import React from "react";
import { Router } from "react-router-dom";

function Tema3() {
  return (
    <div>
        <p>
        <p>Topología de Anillo</p>
        Es un tipo de topología de red simple, en donde las estaciones de trabajo o computadoras, se encuentran conectadas entre sí en forma de un anillo, es decir, forman un círculo entre ellas. La información viaja en un solo sentido, por lo tanto, que si un nodo deja de funcionar se cae la red o deja de abastecer información a las demás computadoras que se encuentran dentro del anillo, por lo tanto, es poco eficaz.
        </p>
        <div>
        <img src="./images/tema3.png" width="300" class="center" />
      </div>
        <p>
          <p>Topología de Árbol</p>  
          Este tipo de topología de red es una de las más sencillas. Como su nombre lo indica, las conexiones entre los nodos (terminales o computadoras) están dispuestas en forma de árbol, con una punta y una base. Es similar a la topología de estrella y se basa directamente en la topología de bus. Si un nodo falla, no se presentan problemas entre los nodos subsiguientes. Cuenta con un cable principal llamado Backbone, que lleva la comunicación a todos los nodos de la red, compartiendo un mismo canal de comunicación.
        </p>
        <div>
        <img src="./images/tema31.png" width="300" class="center" />
      </div>
      <p>
          <p>Topología de Bus</p>  
          La topología de Bus se basa en un cable central, el cual lleva la información a todas las computadoras de la red, en forma de ramificaciones, de modo, que la información viaja de manera secuencial hacia los nodos de la red. Su desventaja se basa en su distribución secuencial de datos, por lo que si se interrumpe el cable central, la red queda inutilizada. En la actualidad es muy poco utilizada.
        </p>
        <div>
        <img src="./images/tema32.png" width="300" class="center" />
      </div>
      <p>
          <p>Topología de Estrella</p>  
          Acá la distribución de la información va desde un punto central o Host, hacia todos los destinos o nodos de la red. En la actualidad, es muy utilizada por su eficiencia y simpleza. Se puede notar que el Host realiza todo el trabajo (una especie de servidor local que administra los servicios compartidos y la información). Por supuesto, cuenta con la ventaja que si un nodo falla, la red continuará trabajando sin inconveniente, aunque depende del funcionamiento del Host.
        </p>
        <div>
        <img src="./images/tema33.png" width="300" class="center" />
      </div>
      <p>
          <p>Topología de Malla</p>  
          Esta topología de Malla es definida como topología de trama. Se trata de un arreglo de interconexión de nodos (terminales) entre sí, realizando la figura de una malla o trama. Es una topología muy utilizada entre las redes WAN o de área amplia. Su importancia radica en que la información puede viajar en diferentes caminos, de manera que si llegara a fallar un nodo, se puede seguir intercambiando información sin inconveniente alguno entre los nodos.
        </p>
        <div>
        <img src="./images/tema34.png" width="300" class="center" />
      </div>
    </div>
  );
}
export default Tema3;
