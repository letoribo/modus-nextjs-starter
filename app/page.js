import styles from "@/styles/page.module.css";
import Dashboard from '@/components/Dashboard.js';
import { getClient } from "@/lib/apollo-client";
import { GREET } from "@/lib/queries";

export default async function Home() {
  let data={}
  try {
    data = await getClient().query({
      query: GREET,
      variables: { name: "Hypermode" }
    }); console.log(data)
  } catch (error) {
    console.error("error:", error);
  }
  return (
    <main className={styles.main}>
      <Dashboard data={data} />
    </main>
  );
}