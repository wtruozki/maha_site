import Layout from "../components/Layout";
import OtherWrap from "../components/OtherWrap";
import styles from "../styles/plan.module.css";
import Image from "next/image";
import Slider from "react-slick";

const Plan = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 300,
    speed: 5000,
    slidesToShow: 1,
    swipe: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
    <Layout>
      <OtherWrap heading="PARTY PLAN">
        <div className={styles.container}>
          <p className={styles.cancel}>
            <strong>
              ※現在、営業内パーティープランのご案内は中止しております。
            </strong>
          </p>
          <Slider {...settings}>
            <Image src="/cake.png" alt="cake" width={1618} height={1000} />
            <Image src="/drinks.png" alt="drinks" width={1618} height={1000} />
            <Image src="/glass.png" alt="glass" width={1618} height={1000} />
          </Slider>

          <div className={styles.heading}>
            <p>
              新年会・忘年会・歓送迎会・打ち上げ
              <br />
              バースデーパーティ・クリスマスパーティー <br />
              記念日・合コン・女子会
              <br />
              <br />
              ※貸し切りのプランもご用意しております。
              <br />
              企業イベントやブライダルパーティーなどにご利用下さい。
              <br />
              <br />
              特別な日に、特別なみんなと、クラブディスコでとびっきりのパーティーはいかがですか？
              <br />
              <br />
              MAHARAJAの豪華空間は、華やかなパーティに最適です。
              <br />
            </p>
          </div>
          <section className={styles.section}>
            <h3>VIP PARTY PLAN</h3>
            <div className={styles.partyItem}>
              <Image
                src="/vpp.png"
                alt="vpp"
                width={300}
                height={436}
                className={styles.partyImg}
              />
              <p>
                おひとり様￥5,000（2時間制・5名様～・要予約）
                <br />
                入場料・テーブルチャージ・飲み放題
                <br />
                <br />
                ※最終入店時間…20時まで ※お席・お部屋のご指定はできません
                <br />
                ※フードメニューは人数・季節により変更がございます
              </p>
            </div>
            <a
              target="_blank"
              href="https://reserva.be/maharajar/reserve?mode=service_staff&search_evt_no=7beJwzMjQzNwIAAwUBAw"
            >
              予約画面へ
            </a>
          </section>

          <section className={styles.section}>
            <h3>LADIES PARTY PLAN</h3>
            <div className={styles.partyItem}>
              <Image
                src="/ladies.png"
                alt="ladies party plan"
                width={300}
                height={436}
                className={styles.partyImg}
              />
              <p>
                おひとり様￥5,000（2時間制・5名様～・要予約）
                <br />
                入場料・テーブルチャージ・飲み放題・食事付きプラン
                <br />
                <br />
                ※最終入店時間…20時まで ※お席・お部屋のご指定はできません
                <br />
                ※フードメニューは人数・季節により変更がございます
                <br />
              </p>
            </div>
            <a
              target="_blank"
              href="https://reserva.be/maharajar/reserve?mode=service_staff&search_evt_no=5aeJwzMjQzNwYAAwYBBA"
            >
              予約画面へ
            </a>
          </section>

          <div className={styles.policy}>
            <p>▼各種パーティープラン利用におけるキャンセルポリシー</p>
            <p>
              15名以上の団体利用時のお客様都合によるキャンセルは以下の通りとする
            </p>
            <p>
              ◆ 10日前~7日前まで:総額の10%
              <br />
              ◆ 6日前~前日まで:総額の30%
              <br />◆ 当日/無連絡:総額の100%
            </p>
            <p>
              ※自然災害及び著しい天候不良などによるキャンセルはその限りではない
              <br />
              ※人数の増減はキャンセルポリシー適応外
              <br />
              ※一部を除き禁煙となります（加熱式タバコを除く）。
              <br />
              喫煙室をご利用いただきますようお願いいたします。
              <br />
            </p>
          </div>
        </div>
      </OtherWrap>
    </Layout>
  );
};

export default Plan;
