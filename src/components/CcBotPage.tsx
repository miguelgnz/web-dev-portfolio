import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import styles from "./CcBotPage.module.css";

// Pages that support the bot's Google OAuth verification. They must stay
// reachable and out of search results.
export function ccBotMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title: { absolute: `${title} | CC Bot Tracker` },
    description,
    robots: { index: false, follow: false },
    alternates: { canonical: path },
  };
}

export default function CcBotPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.surface}>
      <main className={styles.page} lang="es">
        <nav aria-label="Navegación de CC Bot Tracker">
          <Link href="/cc-bot">CC Bot Tracker</Link>
        </nav>
        <article>
          <p className={styles.label}>UNA HERRAMIENTA PERSONAL</p>
          <h1>{title}</h1>
          {children}
        </article>
        <footer>
          <Link href="/cc-bot/privacy">Política de privacidad</Link>
          <a href="mailto:mitts_deep.9i@icloud.com">Contacto</a>
        </footer>
      </main>
    </div>
  );
}
