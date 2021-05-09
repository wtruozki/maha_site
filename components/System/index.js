import Link from "next/link";
import styles from "./styles.module.css";

const Fee = () => {
  return (
    <div className={styles.container}>
      <div className={styles.feeFlex}>
        <div className={styles.fee}>
          <p></p>
          <p>Men</p>
          <p>Lady</p>
          <p>Happy Hour</p>
          <p>正規料金</p>
          <p>
            ¥2,500-
            <br />
            <small>(4ticket)</small>
          </p>
          <p>
            ¥1,500-
            <br />
            <small>(2ticket)</small>
          </p>
          <p>
            ¥3,500-
            <br />
            <small>(4ticket)</small>
          </p>
          <p>
            ¥2,500-
            <br />
            <small>(2ticket)</small>
          </p>
        </div>
      </div>
      <div className={styles.text}>
        <p>
          イベントにより異なりますので
          <br />
          ご注意ください。
        </p>
        <Link href="/">
          <a>クーポン・イベントの情報はこちら</a>
        </Link>
      </div>
    </div>
  );
};

export default Fee;
