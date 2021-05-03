import Link from "next/link";

import Blogs from "../components/Blogs";
import HomeSection from "../components/HomeSection";
import Fee from "../components/System";
import Layout from "../components/Layout";
import InfoBtn from "../components/InfoBtn";
import Carousel from "../components/Carousel";

import styles from "../styles/Home.module.css";

export default function Home({ info, whats, pickup }) {
  return (
    <Layout title="マハラジャ六本木-六本木のクラブディスコ">
      <div className={styles.top}>
        <img src="./maharaja.png" alt="ロゴ" />

        <video
          className={styles.video}
          src="./testsq.mp4"
          muted
          autoPlay
          loop
          playsInline
        ></video>
      </div>
      <main className={styles.container}>
        <HomeSection heading="PICK UP">
          <Carousel pickup={pickup} />
        </HomeSection>
        <HomeSection heading="WHAT'S NEW">
          <Blogs blog={whats} types="whats"></Blogs>
        </HomeSection>

        <HomeSection heading="EVENT INFO">
          <Blogs blog={info} types="info"></Blogs>
        </HomeSection>

        <HomeSection heading="SYSTEM">
          <Fee />
        </HomeSection>
        <HomeSection heading="CONCEPT">
          <article className={styles.concept}>
            <h3>洗練された大人の遊び場・・・</h3>
            洗練されたゴージャスでラグジュアリーな空間。
            <br />
            遊びなれた大人たちのワンランク上のクラブ＆ディスコ。
            <br />
            <br />
            2010年に待望の新オープンを果たしたMAHARAJAは club & disco
            のミックススタイル。
            <br />
            <br />
            オシャレにアフタータイムを楽しむ大人たちの、新しい遊びスタイルを提案します。
            <br />
            <br />
            最新のサウンドシステムやクラブ・ディスコのトップDJたち、
            ワンランク上のVIPルームなど魅力的な空間を提供。
            <br />
            <br />
            誰もが安心して楽しめるクラブディスコ『MAHARAJA』で
            特別な空間を心ゆくまでお楽しみ下さい。
          </article>
        </HomeSection>

        <HomeSection heading="INFORMATION">
          <InfoBtn />
        </HomeSection>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_CMS_KEY },
  };

  const info_data = await fetch("https://maha.microcms.io/api/v1/info", key)
    .then((res) => res.json())
    .catch(() => null);

  const whats_data = await fetch("https://maha.microcms.io/api/v1/whats", key)
    .then((res) => res.json())
    .catch(() => null);

  const pickup_data = await fetch("https://maha.microcms.io/api/v1/pickup", key)
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      info: info_data.contents,
      whats: whats_data.contents,
      pickup: pickup_data.contents,
    },
  };
};
