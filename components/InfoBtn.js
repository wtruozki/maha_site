import styles from "./styles/InfoBtn.module.css";
import Link from "next/link";

const infoBtn = ({ image, title }) => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.item}>
          <img src={image} alt={title} />
          <h3 className={styles.title}>{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default infoBtn;
