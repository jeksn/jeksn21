import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Johan Eriksson - jeksn.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>jeksn</h1>

        <span className={styles.info}>developer | WTMG Create</span>

        <p className={styles.email}>johan@jeksn.me</p>
      </main>
    </div>
  );
}
