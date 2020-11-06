import React from "react";
import { Router } from "react-router-dom";

function Tema9() {
  return (
    <div>
      <p>
        <p>Medidas aplicaciones y servicios</p>
        <p>Unidad de datos del protocolo y encapsulación</p>
        <p>
        La forma que adopta una sección de datos en cualquier capa se denomina Unidad de datos del protocolo (PDU). Durante la encapsulación, cada capa encapsula las PDU que recibe de la capa inferior de acuerdo con el protocolo que se utiliza. En cada etapa del proceso, una PDU tiene un nombre distinto para reflejar su nuevo aspecto. Aunque no existe una convención universal de nombres para las PDU, en este curso se denominan de acuerdo con los protocolos de la suite TCP/IP.
        </p>
      </p>
      <p>Datos: el término general para las PDU que se utilizan en la capa de aplicación.</p>
      <p>Segmento: PDU de la capa de transporte.</p>
      <p>Paquete: PDU de la capa de Internetwork.</p>
      <p>Trama: PDU de la capa de acceso a la red.</p>
      <p>Bits: una PDU que se utiliza cuando se transmiten físicamente datos a través de un medio.</p>
      <div>
        <img src="./images/tema9.png" width="900" class="center" />
      </div>
    </div>
  );
}
export default Tema9;