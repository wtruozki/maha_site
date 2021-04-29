import Head from "next/head";
import Blogs from "../components/Blogs";
import HomeSection from "../components/HomeSection";

import Link from "next/link";

import styles from "../styles/Home.module.css";
import Fee from "../components/Fee";
import Layout from "../components/Layout";
import InfoBtn from "../components/InfoBtn";

export default function Home({ test, whats }) {
  return (
    <Layout>
      <main className={styles.container}>
        <div className={styles.image}>
          <img src="/home2.png" />
        </div>
        <HomeSection heading="PICK UP"></HomeSection>
        <HomeSection heading="WHAT'S NEW">
          <Blogs blog={whats}></Blogs>
        </HomeSection>

        <HomeSection heading="EVENT INFO">
          <Blogs blog={test}></Blogs>
        </HomeSection>

        <HomeSection heading="ENTRANCE FEE">
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
          <div className={styles.infoWrapper}>
            <div className={styles.infoContainer}>
              <InfoBtn title="Party Plan" image="bottle.png" />
              <InfoBtn title="Rental" image="rental.png" />
              <InfoBtn title="Shop" image="shop.png" />
              <InfoBtn title="Recruit" image="recruit.png" />
              <InfoBtn title="Party Plan" image="bottle.png" />
              <InfoBtn title="Rental" image="rental.png" />
              <InfoBtn title="Shop" image="shop.png" />
              <InfoBtn title="Recruit" image="recruit.png" />
            </div>
          </div>
        </HomeSection>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const test_data = await fetch("https://maha.microcms.io/api/v1/test", key)
    .then((res) => res.json())
    .catch(() => null);

  const whats_data = await fetch("https://maha.microcms.io/api/v1/whats", key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      test: test_data.contents,
      whats: whats_data.contents,
    },
  };
};
