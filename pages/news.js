import AllWhats from "../components/AllWhats";
import Layout from "../components/Layout";
import OtherWrap from "../components/OtherWrap";
import styles from "../styles/news.module.css";

const News = ({ whats }) => {
  return (
    <Layout>
      <OtherWrap heading="news">
        <div className={styles.container}>
          {whats.map((val, i) => (
            <AllWhats props={val} key={i} />
          ))}
        </div>
      </OtherWrap>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_CMS_KEY },
  };

  const whats_data = await fetch("https://maha.microcms.io/api/v1/whats", key)
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      whats: whats_data.contents,
    },
  };
};

export default News;
