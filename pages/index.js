import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Johan Eriksson - jeksn.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-5xl font-bold">jeksn / Johan Eriksson</h1>
        <span className="mt-4 text-xl">developer | WTMG Create</span>
        <Link href="mailto:johan@jeksn.me">
          <a className="mt-4 text-2xl hover:underline">johan@jeksn.me</a>
        </Link>
      </main>
    </div>
  );
}
