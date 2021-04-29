import Link from "next/link";
import styles from "./styles/Fee.module.css";

const Fee = () => {
  return (
    <div className={styles.container}>
      <div className={styles.feeFlex}>
        <div className={styles.fee}>
          <p></p>
          <p>Happy Hour</p>
          <p>正規料金</p>
          <p>Men</p>
          <p>Lady</p>
          <p>¥2,500-</p>
          <p>¥3,500-</p>
          <p>¥1,500-</p>
          <p>¥2,500-</p>
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
