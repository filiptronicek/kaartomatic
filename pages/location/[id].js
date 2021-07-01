export default function PlacePage({ params }) {
  return (
    <div>
        <h2>{params.id}</h2>
      <p>Toto místo je velmi zajímavé a měli byste ho navštívit.</p>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "zumpa",
        },
      },
      {
        params: {
          id: "msft",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      params,
    },
  };
}
