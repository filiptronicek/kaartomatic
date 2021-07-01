import React, { useEffect, useState } from 'react';
import Head from "next/head";
import dynamic from 'next/dynamic';

import styles from "../styles/Home.module.css";

const isServer = () => typeof window === 'undefined';

const NoSSRComponent = dynamic(() => import("../src/components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kaartomatic</title>
        <meta name="description" content="The place for your next vacation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <img src="/logo.png" />
          <h1 className={styles.title}>Kaartomatic</h1>

          <p className={styles.description}>Místo pro váš příští výlet!</p>

        </div>
        <div className={styles.grid}>
          <p>
            Karlův most je nuda! Kaartomatic pomáhá zviditelnit méně známá
            místa, takže můžete zapomenout na stereotypní dovolené.
          </p>
          <p>
            Kaartomatic je projekt, který jsme vyvíjeli srdcem s láskou k naší vlasti a jejím zajímavým místům. 💚
          </p>
        </div>
        {isServer && <NoSSRComponent />}
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
