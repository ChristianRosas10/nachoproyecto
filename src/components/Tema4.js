import React from "react";
import { Router } from "react-router-dom";

function Tema4() {
  return (
    <div>
      <p>
        <p>Modelo de un Sistema de Comunicaciones </p>
        La Comunicación es la transferencia de información con sentido desde un
        lugar (remitente, origen, fuente, transmisor) a otro lugar (destino,
        receptor). Por otra parte Información es un patrón físico al cual se le
        ha asignado un significado comúnmente acordado. El patrón debe ser único
        (separado y distinto), capaz de ser enviado por el transmisor, y capaz
        de ser detectado y entendido por el receptor. Si la información es
        intercambiada entre comunicadores humanos, por lo general se transmite
        en forma de sonido, luz o patrones de textura en forma tal que pueda ser
        detectada por los sentidos primarios del oído, vista y tacto. El
        receptor asumirá que no se está comunicando información si no se reciben
        patrones reconocibles.
      </p>
      <p>
        ELEMENTOS DEL SISTEMA: En toda comunicación existen tres elementos
        básicos (imprescindibles uno del otro) en un sistema de comunicación: el
        transmisor, el canal de transmisión y el receptor. Cada uno tiene una
        función característica. El Transmisor pasa el mensaje al canal en forma
        de señal. Para lograr una transmisión eficiente y efectiva, se deben
        desarrollar varias operaciones de procesamiento de la señal. La más
        común e importante es la modulación, un proceso que se distingue por el
        acoplamiento de la señal transmitida a las propiedades del canal, por
        medio de una onda portadora.
      </p>
      <p>
        El Canal de Transmisión o medio es el enlace eléctrico entre el
        transmisor y el receptor, siendo el puente de unión entre la fuente y el
        destino. Este medio puede ser un par de alambres, un cable coaxial, el
        aire, etc. Pero sin importar el tipo, todos los medios de transmisión se
        caracterizan por la atenuación, la disminución progresiva de la potencia
        de la señal conforme aumenta la distancia. La función del Receptor es
        extraer del canal la señal deseada y entregarla al transductor de
        salida. Como las señales son frecuentemente muy débiles, como resultado
        de la atenuación, el receptor debe tener varias etapas de amplificación.
        En todo caso, la operación clave que ejecuta el receptor es la
        demodulación, el caso inverso del proceso de modulación del transmisor,
        con lo cual vuelve la señal a su forma original. El Mensaje Información
        que se pretende llegue del emisor al receptor por medio de un sistema de
        comunicación. Puede ser en formas como ser texto, número, audio,
        gráficos, etc. Este también puede ser de forma verbal o no verbal.
      </p>
      <div>
        <img src="./images/tema4.jpg" width="850" class="center" />
      </div>
    </div>
  );
}
export default Tema4;
