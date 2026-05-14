import type { AuthLayoutProps } from "./AuthLayout.types";
import styles from "./AuthLayout.module.css";

export default function AuthLayout({
  children,
  visualSlot,
}: AuthLayoutProps) {
  return (
    <main className={styles.authLayout}>
      <section className={styles.authLayout__form}>{children}</section>
      <aside className={styles.authLayout__visual} aria-hidden="true">
        {visualSlot}
      </aside>
    </main>
  );
}
