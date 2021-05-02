import Layout from "../../components/Layout";

import styles from "../../styles/infoId.module.css";

export default function PickupId({ pickup }) {
  return (
    <Layout title={pickup.title}>
      <main className={styles.container}>
        <h1 className={styles.title}>{pickup.title}</h1>
        <div className={styles.item}>
          <img src={pickup.image.url} alt={pickup.title} />
          <div
            dangerouslySetInnerHTML={{
              __html: `${pickup.item}`,
            }}
          />
        </div>
        <div className={styles.tagContainer}>
          <p>{pickup.tag}</p>
          <small>{pickup.publishedAt}</small>
        </div>
      </main>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch("https://maha.microcms.io/api/v1/pickup", key)
    .then((res) => res.json())
    .catch(() => null);
  const paths = data.contents.map((content) => `/pickup/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const pickup_data = await fetch(
    `https://maha.microcms.io/api/v1/pickup/${id}`,
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      pickup: pickup_data,
    },
  };
};
