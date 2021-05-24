import AllWhats from "../components/AllWhats";
import Layout from "../components/Layout";
import OtherWrap from "../components/OtherWrap";

const News = ({ whats }) => {
  return (
    <Layout title="NEWS">
      <OtherWrap heading="news">
        {whats.map((val, i) => (
          <AllWhats props={val} key={i} />
        ))}
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
