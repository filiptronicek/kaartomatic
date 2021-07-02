import styles from "../../styles/Place.module.css";
import Head from "next/head";
import Link from "next/link";

import { locations as locationData } from "../../src/lib/locations";
import Rating from "../../src/components/Rating";

export default function PlacePage({ additionalInfo }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{additionalInfo.name} | Kaartomatic</title>
        <meta name="description" content="The place for your next vacation" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header>
        <Link href="/">
          <img className={styles.logo} src="/logo.png" />
        </Link>
      </header>
      <main className={styles.main}></main>

      <div>
        <h2>{additionalInfo.name}</h2>
        <div>
          <iframe width="500" height="400" frameborder="0" src={`https://www.bing.com/maps/embed?h=400&w=500&cp=${additionalInfo.location[0]}~${additionalInfo.location[1]}&lvl=11&typ=d&sty=r&src=SHELL&FORM=MBEDV8`} scrolling="no">
          </iframe>

        </div>
        <Rating stars={additionalInfo.rating} />
        <p className={styles.description}>{additionalInfo.description}</p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  let pathsArr = [];
  for (const location of locationData) {
    pathsArr.push({ params: { id: location.id } });
  }

  return {
    paths: pathsArr,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let additionalInfo = { id: params.id, name: "Default" };
  for (const location of locationData) {
    if (location.id === params.id) {
      additionalInfo = location;
      break;
    }
  }

  return {
    props: {
      additionalInfo,
    },
  };
}
