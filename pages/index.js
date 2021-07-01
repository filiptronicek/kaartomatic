import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kaartomatic</title>
        <meta name="description" content="The place for your next vacation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Caartomatic</h1>

        <p className={styles.description}>The place for your next vaction</p>

        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://studuj.digital"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by awesome people, for awesome people{" "}
        </a>
      </footer>
    </div>
  );
}
