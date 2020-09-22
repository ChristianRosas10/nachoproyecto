import React from "react";
import { Router } from "react-router-dom";
import "./../App.css";

function Tema1() {
  return (
    <div>
      <p>
        Emisor y receptor El emisor es el elemento terminal de la comunicación
        que se encarga de proporcionar la información. Se contrapone al
        receptor, que es el elemento terminal de la comunicación que recibe la
        información procedente del emisor. A cada emisor le corresponde un
        receptor. No se concibe un emisor sin un receptor. Sin embargo, pueden
        darse casos en los que haya un receptor y múltiples emisores o un emisor
        y múltiples receptores. Por ejemplo, un sistema de televisión consiste
        en una estación emisora desde la que se distribuye la señal
        electromagnética a múltiples receptores. En una agencia de noticias hay
        un solo receptor de noticias (la propia agencia) y múltiples emisores de
        la misma (periodistas) distribuidos por todo el mundo. También son
        posibles combinaciones de múltiples emisores a múltiples receptores,
        como el caso de gran parte de los dispositivos utilizados en las redes
        de comunicación entre ordenadores. Transductor Un transductor es un
        dispositivo encargado de transformar la naturaleza de la señal. Canal El
        canal es el elemento que se encarga del transporte de la señal sobre la
        que viaja la información que emisor y receptor pretenden intercambiar.
        Cada canal de transmisión es adecuado para algunas señales concretas y
        no todos sirven para cualquier tipo de señal. Por ejemplo, la señal
        eléctrica se propaga bien por canales conductores, pero no ocurre lo
        mismo con la señal luminosa.
      </p>
      <div>
      <img src="./images/tema1.png"  class="center"/>
      </div>
    </div>
  );
}
export default Tema1;
