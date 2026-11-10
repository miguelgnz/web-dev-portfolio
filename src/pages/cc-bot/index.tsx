import Link from "next/link";
import CcBotPage from "@/components/CcBotPage";

export default function CcBotHome() {
  return (
    <CcBotPage
      title="CC Bot Tracker"
      description="Bot privado de Telegram para consultar compras de tarjeta y registrar gastos personales."
      path="/cc-bot"
    >
      <p>
        CC Bot Tracker es una herramienta de uso personal desarrollada y
        administrada por Miguel González. Permite consultar compras de tarjeta
        desde un chat privado de Telegram y registrar compras que el propietario
        describe o copia de un SMS.
      </p>
      <h2>Qué hace</h2>
      <ul>
        <li>Importa avisos de compra del banco recibidos en Gmail.</li>
        <li>Permite consultar compras por fecha, comercio, moneda y ciclo.</li>
        <li>
          Prepara registros manuales y cambios de presupuesto para que el
          propietario los revise y confirme.
        </li>
      </ul>
      <p>
        Los cálculos se realizan en la aplicación. Los registros dependen de los
        avisos y compras disponibles; no sustituyen el estado de cuenta del
        banco. La herramienta no realiza pagos ni mueve dinero.
      </p>
      <h2>Por qué solicita acceso a Gmail</h2>
      <p>
        La conexión permite buscar y leer avisos bancarios para extraer datos de
        compras y evitar registros duplicados. Se solicita el permiso de solo
        lectura de Gmail: no permite enviar mensajes, modificarlos ni
        eliminarlos. Aunque la aplicación busca avisos bancarios, el permiso
        autorizado permite técnicamente leer el buzón; Google no lo limita a un
        remitente concreto.
      </p>
      <h2>Acceso privado</h2>
      <p>
        El bot admite únicamente al propietario configurado. Esta página es
        informativa y no ofrece registro público ni acceso a compras o correos.
        Las funciones opcionales de IA interpretan mensajes enviados por el
        propietario; la importación automática de Gmail no usa IA.
      </p>
      <p>
        Consulta cómo se tratan los datos en la{" "}
        <Link href="/cc-bot/privacy">política de privacidad</Link>. Para
        contactar al responsable, escribe a{" "}
        <a href="mailto:mitts_deep.9i@icloud.com">mitts_deep.9i@icloud.com</a>.
      </p>
    </CcBotPage>
  );
}
