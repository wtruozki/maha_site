import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/infoId.module.css";

export default function InfoId({ info }) {
  return (
    <Layout title={info.title}>
      <main className={styles.container}>
        <section>
          <h1 className={styles.title}>{info.title}</h1>
          <span className={styles.tag}>{info.tag}</span>
        </section>
        <div className={styles.item}>
          <img src={info.image.url} alt={info.title} />
          <div
            dangerouslySetInnerHTML={{
              __html: `${info.item}`,
            }}
          />
        </div>
      </main>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_CMS_KEY },
  };
  const data = await fetch("https://maha.microcms.io/api/v1/info", key)
    .then((res) => res.json())
    .catch(() => null);
  const paths = data.contents.map((content) => `/info/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const key = {
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_CMS_KEY },
  };

  const info_data = await fetch(
    `https://maha.microcms.io/api/v1/info/${id}`,
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      info: info_data,
    },
  };
};
