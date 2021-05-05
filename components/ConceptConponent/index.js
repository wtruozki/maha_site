import styles from "./styles.module.css";

const ConceptComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <img src="/home3.png" />
          </div>
          <article className={styles.concept}>
            <h3>洗練された大人の遊び場・・・</h3>
            <p>
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
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ConceptComponent;
