import CcBotPage from "@/components/CcBotPage";

export default function CcBotPrivacy() {
  return (
    <CcBotPage
      title="Política de privacidad"
      description="Cómo CC Bot Tracker accede, utiliza, conserva y protege los datos de Gmail y Telegram."
      path="/cc-bot/privacy"
    >
      <p>Última actualización: 5 de noviembre de 2026.</p>
      <p>
        Esta política corresponde a CC Bot Tracker, una herramienta privada de
        uso personal administrada por Miguel González. Contacto:{" "}
        <a href="mailto:mgx.gon@gmail.com">mgx.gon@gmail.com</a>.
      </p>
      <h2>Acceso a Gmail y datos utilizados</h2>
      <p>
        Con autorización del propietario, la aplicación solicita el permiso
        gmail.readonly para buscar y leer avisos bancarios de compras. Este
        permiso permite técnicamente leer el buzón, aunque la aplicación filtra
        avisos del banco. No permite enviar, modificar ni eliminar correos.
      </p>
      <p>
        Procesa contenido y metadatos de los mensajes recuperados para comprobar
        su autenticidad e identificar comercio, monto, moneda, referencia de
        cuenta, autorización y fechas disponibles. Conserva los datos
        estructurados de compras, identificadores y huellas de mensajes para
        evitar duplicados, resultados de revisión y progreso de sincronización.
        Los correos completos se procesan durante la importación y no se
        archivan como contenido en la base de datos de la aplicación.
      </p>
      <p>
        También conserva configuración, presupuestos, borradores y registros
        manuales confirmados, así como los identificadores necesarios para
        restringir el chat de Telegram al propietario. Los tokens de Google se
        guardan en archivos privados para mantener la conexión autorizada.
      </p>
      <h2>Finalidad y proveedores</h2>
      <p>
        Los datos se usan para registrar y consultar gastos personales, calcular
        resúmenes, revisar posibles duplicados y mantener la operación y sus
        respaldos. No se venden ni se usan para publicidad o para entrenar
        modelos de inteligencia artificial de propósito general.
      </p>
      <ul>
        <li>Google proporciona el acceso autorizado a Gmail.</li>
        <li>
          Telegram procesa los mensajes enviados al bot y las respuestas, que
          pueden contener información financiera.
        </li>
        <li>
          Cuando está habilitada la interpretación con IA, OpenAI recibe el
          texto del mensaje que el propietario envía, que puede incluir una
          consulta, un SMS o datos de una compra. La solicitud configura store:
          false; esto no equivale a garantizar retención cero por el proveedor.
          La importación automática no envía correos de Gmail a OpenAI. Si el
          propietario copia contenido de un correo en el chat, ese texto puede
          formar parte del mensaje enviado a OpenAI.
        </li>
        <li>
          El almacenamiento privado administrado por el propietario puede estar
          en su equipo o en AWS. Los respaldos remotos se almacenan en Amazon
          S3, en Estados Unidos. Vercel aloja estas páginas informativas, no la
          base de compras ni las credenciales del bot.
        </li>
      </ul>
      <p>
        Cada proveedor procesa los datos que recibe conforme a sus condiciones y
        políticas. El acceso humano a los datos de la aplicación se limita al
        propietario o a personas que este autorice expresamente para soporte.
      </p>
      <h2>Almacenamiento, conservación y protección</h2>
      <p>
        Las compras y la configuración se conservan mientras el propietario las
        necesite, hasta que las elimine o solicite su eliminación. Se aplican
        controles de acceso, archivos privados para credenciales y cifrado de
        los archivos de respaldo. La base de datos no se ofrece públicamente.
        Estos controles no eliminan todos los riesgos de seguridad.
      </p>
      <p>
        La retención prevista de respaldos es de 30 días. La última copia local
        verificada puede conservarse por más tiempo para evitar perder la única
        recuperación disponible. Eliminar registros activos no elimina de
        inmediato sus copias anteriores; el propietario debe gestionar también
        los respaldos al atender una solicitud de eliminación.
      </p>
      <h2>Revocar acceso y eliminar datos</h2>
      <p>
        Puedes retirar el permiso de Google desde{" "}
        <a href="https://myaccount.google.com/connections">
          las conexiones de tu cuenta de Google
        </a>
        . Esto impide futuras consultas autorizadas cuando se invalida el
        acceso; no borra las compras importadas, las copias de seguridad ni los
        mensajes ya enviados a Telegram.
      </p>
      <p>
        Para solicitar la eliminación de registros, credenciales o respaldos de
        la aplicación, contacta al responsable en{" "}
        <a href="mailto:mgx.gon@gmail.com">mgx.gon@gmail.com</a>. Los mensajes
        del chat y los datos conservados por proveedores se gestionan también
        mediante los controles y políticas de esos servicios.
      </p>
      <h2>Uso limitado y cambios</h2>
      <p>
        El uso y la transferencia de información recibida de las API de Google
        se ajustan a la{" "}
        <a href="https://developers.google.com/terms/api-services-user-data-policy">
          Política de Datos de Usuario de los Servicios de API de Google
        </a>
        , incluidos sus requisitos de uso limitado. Esta política se actualizará
        si cambia el tratamiento de datos; la fecha de actualización aparecerá
        en esta página.
      </p>
    </CcBotPage>
  );
}
