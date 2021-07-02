import React from 'react';
import Head from "next/head";
import dynamic from 'next/dynamic';
import Router from "next/router";

import { DefaultButton } from '@fluentui/react/lib-commonjs/Button';

import { locations as locationData } from "../src/lib/locations";

import styles from "../styles/Home.module.css";

const isServer = () => typeof window === 'undefined';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Kaartomatic</title>
        <meta name="description" content="The place for your next vacation" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <img src="/logo.png" />
          <h1 className={styles.title}>Kaartomatic</h1>

          <p className={styles.description}>Místo pro váš příští výlet!</p>

        </div>
        <div>
        </div>

        <DefaultButton
          onClick={() => {
            const randomLoc = locationData[Math.floor(Math.random() * locationData.length)];
            Router.push(`/location/${randomLoc.id}`);
          }}
          style={{
            marginTop: 50,
            background: "#ACF39D",
            width: 200,
            maxWidth: "90%"
          }}
        >
          Nevím kam!
        </DefaultButton>
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
