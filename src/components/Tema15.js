import React from "react";
import { Router } from "react-router-dom";

function Tema10() {
  return (
    <div>
      <p>
        <p>Funciones de la capa de transporte</p>
        <p>Seguimiento de Conversaciones individuales</p>
        <p>
        Cualquier host puede tener múltiples aplicaciones que se están comunicando a través de la red. Cada una de estas aplicaciones se comunicará con una o más aplicaciones en hosts remotos. Es responsabilidad de la capa de Transporte mantener los diversos streams de comunicación entre estas aplicaciones.
        </p>
      </p>
      <p>Segmentación de datos </p>
      <p>Debido a que cada aplicación genera un stream de datos para enviar a una aplicación remota, estos datos deben prepararse para ser enviados por los medios en partes manejables. Los protocolos de la capa de Transporte describen los servicios que segmentan estos datos de la capa de Aplicación. Esto incluye la encapsulación necesaria en cada sección de datos. Cada sección de datos de aplicación requiere que se agreguen encabezados en la capa de Transporte para indicar la comunicación a la cual está asociada.</p>
      <p>Soporte de comunicación confiable </p>
      <p>La función principal de la capa de Transporte es administrar los datos de aplicación para las conversaciones entre hosts. Sin embargo, las diferentes aplicaciones tienen diferentes requerimientos para sus datos y, por lo tanto, se han desarrollado diferentes protocolos de Transporte para satisfacer estos requerimientos.</p>
      <p>Un protocolo de la capa de Transporte puede implementar un método para asegurar la entrega confiable de los datos. En términos de redes, confiabilidad significa asegurar que cada sección de datos que envía el origen llegue al destino. En la capa de Transporte, las tres operaciones básicas de confiabilidad son:</p>
      <p>seguimiento de datos transmitidos, 
acuse de recibo de los datos recibidos, y 
retransmisión de cualquier dato sin acuse de recibo. </p>
      <div>
        <img src="./images/tema15.jpg" width="900" class="center" />
      </div>
    </div>
  );
}
export default Tema10;