import Layout from "../../components/Layout";

import styles from "../../styles/NewsId.module.css";

export default function NewsId({ whats }) {
  return (
    <Layout title={whats.title}>
      <main className={styles.container}>
        <h1 className={styles.title}>{whats.title}</h1>
        <div className={styles.item}>
          <div
            dangerouslySetInnerHTML={{
              __html: `${whats.item}`,
            }}
          />
        </div>
        <div className={styles.tagContainer}>
          <p>{whats.tag}</p>
          <small>{whats.publishedAt}</small>
        </div>
      </main>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch("https://maha.microcms.io/api/v1/whats", key)
    .then((res) => res.json())
    .catch(() => null);
  const paths = data.contents.map((content) => `/whats/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const whats_data = await fetch(
    `https://maha.microcms.io/api/v1/whats/${id}`,
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      whats: whats_data,
    },
  };
};
