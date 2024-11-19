import styles from "@/styles/page.module.css";
import Dashboard from '@/components/Dashboard.js';

export default async function Home() {
  return (
    <main className={styles.main}>
      <Dashboard />
    </main>
  );
}