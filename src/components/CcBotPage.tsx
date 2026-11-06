import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./CcBotPage.module.css";

export default function CcBotPage({
  title,
  description,
  path,
  children,
}: {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{title} | CC Bot Tracker</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://www.miguelgnz.dev${path}`} />
      </Head>
      <div className={styles.surface}>
        <main className={styles.page} lang="es">
          <nav aria-label="Navegación de CC Bot Tracker">
            <Link href="/cc-bot">CC Bot Tracker</Link>
            <Link href="/">Miguel Gnz ↗</Link>
          </nav>
          <article>
            <p className={styles.label}>UNA HERRAMIENTA PERSONAL</p>
            <h1>{title}</h1>
            {children}
          </article>
          <footer>
            <Link href="/cc-bot/privacy">Política de privacidad</Link>
            <a href="mailto:mgx.gon@gmail.com">Contacto</a>
          </footer>
        </main>
      </div>
    </>
  );
}
