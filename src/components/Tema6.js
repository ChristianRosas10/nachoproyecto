import React from "react";
import { Router } from "react-router-dom";

function Tema6() {
  return (
    <div>
      <p>
        <p>Modelos de referencia</p>
        <p>Modelo TCP/IP</p>
        El modelo TCP/IP es una descripción de protocolos de red desarrollado
        por Vinton Cerf y Robert E. Kahn, en la década de 1970. Fue implantado
        en la red ARPANET, la primera red de área amplia (WAN), desarrollada por
        encargo de DARPA, una agencia del Departamento de Defensa de los Estados
        Unidos, y predecesora de Internet; por esta razón, a veces también se le
        llama modelo DoD o modelo DARPA. El modelo TCP/IP es usado para
        comunicaciones en redes y, como todo protocolo, describe un conjunto de
        guías generales de operación para permitir que un equipo pueda
        comunicarse en una red. TCP/IP provee conectividad de extremo a extremo
        especificando cómo los datos deberían ser formateados, direccionados,
        transmitidos, enrutados y recibidos por el destinatario. El modelo
        TCP/IP y los protocolos relacionados son mantenidos por la Internet
        Engineering Task Force.
      </p>
      <p>Modelo OSI</p>
      El modelo OSI lo desarrolló allá por 1984 la organización ISO
      (International Organization for Standarization). Este estándar perseguía
      el ambicioso objetivo de conseguir interconectar sistema de procedencia
      distinta para que esto pudieran intercambiar información sin ningún tipo
      de impedimentos debido a los protocolos con los que estos operaban de
      forma propia según su fabricante. El modelo OSI está conformado por 7
      capas o niveles de abstracción. Cada uno de estos niveles tendrá sus
      propias funciones para que en conjunto sean capaces de poder alcanzar su
      objetivo final. Precisamente esta separación en niveles hace posible la
      intercomunicación de protocolos distintos al concentrar funciones
      específicas en cada nivel de operación. Otra cosa que debemos tener muy
      presente es que el modelo OSI no es la definición de una topología ni un
      modelo de red en sí mismo. Tampoco especifica ni define los protocolos que
      se utilizan en la comunicación, ya que estos están implementados de forma
      independiente a este modelo. Lo que realmente hace OSI es definir la
      funcionalidad de ellos para conseguir un estándar. Los niveles de los que
      se compone el modelo OSI son:
      <div>
        <img src="./images/tema6.png" width="350" class="center" />
      </div>
      <p>Comparacion entre modelo TCP/IP y OSI</p>
      <p>Similitudes</p>
      Ambos se dividen en capas. Ambos tienen capas de aplicación, aunque
      incluyen servicios muy distintos. Ambos tienen capas de transporte y de
      red similares. Se supone que la tecnología es de conmutación por paquetes
      (no de conmutación por circuito). Los profesionales de networking deben
      conocer ambos.
      <p>Diferencias</p>
      TCP/IP combina las funciones de la capa de presentación y de sesión en la
      capa de aplicación TCP/IP combina la capas de enlace de datos y la capa
      física del modelo OSI en una sola capa TCP/IP parece ser más simple porque
      tiene menos capas Los protocolos TCP/IP son los estándares en torno a los
      cuales se desarrolló la Internet, de modo que la credibilidad del modelo
      TCP/IP se debe en gran parte a sus protocolos. En comparación, las redes
      típicas no se desarrollan normalmente a partir del protocolo OSI, aunque
      el modelo OSI se usa como guía.
      <div>
        <img src="./images/tema6.gif" width="500" class="center" />
      </div>
    </div>
  );
}
export default Tema6;
