import React from "react";
import { Router } from "react-router-dom";

function Tema7() {
  return (
    <div>
      <p>
        <p>Capa de aplicacion</p>
        <p>
        Suministra servicios de red a las aplicaciones del usuario. Difiere de las demás capas debido a que no proporciona servicios a ninguna otra capa OSI, sino solamente a aplicaciones que se encuentran fuera del modelo OSI. Algunos ejemplos de aplicaciones son los programas de hojas de cálculo, de procesamiento de texto y los de las terminales bancarias. La capa de aplicación establece la disponibilidad de los potenciales socios de comunicación, sincroniza y establece acuerdos sobre los procedimientos de recuperación de errores y control de la integridad de los datos. Si desea recordar a la Capa 7 en la menor cantidad de palabras posible, piense en los navegadores de Web.
        </p>
      </p>
      <p>Protocolo de servicio de nombres de dominios (DNS): se utiliza para resolver nombres de Internet en direcciones IP.</p>
      <p>Telnet: protocolo de emulación de terminal que se utiliza para proporcionar acceso remoto a servidores y dispositivos de red.</p>
      <p>Protocolo bootstrap (BOOTP): un precursor al protocolo DHCP. Protocolo de red que se utiliza para obtener información de dirección IP durante el arranque.</p>
      <p>Protocolo de configuración dinámica de host (DHCP): se utiliza para asignar una dirección IP, una máscara de subred, un gateway predeterminado y un servidor DNS a un host.</p>
      <p>Protocolo de transferencia de hipertexto (HTTP): se utiliza para transferir archivos que conforman las páginas Web de la World Wide Web.</p>
      <div>
        <img src="./images/tema7.png" width="500" class="center" />
      </div>
      <p>Protocolo de transferencia de archivos (FTP): se utiliza para la transferencia interactiva de archivos entre sistemas.</p>
      <p>Protocolo trivial de transferencia de archivos (TFTP): se utiliza para la transferencia activa de archivos sin conexión.</p>
      <p>Protocolo simple de transferencia de correo (SMTP): se utiliza para la transferencia de mensajes y archivos adjuntos de correo electrónico.</p>
      <p>Protocolo de oficina de correos (POP): lo utilizan los clientes de correo electrónico para recuperar el correo electrónico de un servidor remoto.</p>
      <p>Protocolo de acceso a mensajes de Internet (IMAP): otro protocolo para la recuperación de correo electrónico.</p>
    </div>
  );
}
export default Tema7;