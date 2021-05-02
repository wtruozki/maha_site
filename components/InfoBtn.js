import styles from "./styles/InfoBtn.module.css";
import Link from "next/link";

const InfoItem = ({ image, title, linkUrl }) => {
  return (
    <div className={styles.container}>
      <Link href={linkUrl}>
        <a className={styles.item}>
          <img src={image} alt={title} />
          <p className={styles.title}>{title}</p>
        </a>
      </Link>
    </div>
  );
};

const InfoBtn = () => {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.infoContainer}>
        <InfoItem title="Party Plan" image="bottle.png" linkUrl="/plan" />
        <InfoItem title="Rental" image="rental.png" linkUrl="/rental" />
        <a
          href="https://maharaja.thebase.in/"
          className={styles.item}
          target="_brank"
          rel="noopener noreferrer"
        >
          <img src="/shop.png" alt="webstore" />
          <p className={styles.title}> Web Store</p>
        </a>
        <InfoItem title="Recruit" image="recruit.png" linkUrl="/recruit" />
        <InfoItem title="Mail Magazine" image="mail.png" linkUrl="/magazine" />
        <InfoItem title="Members Card" image="members.png" linkUrl="/members" />
      </div>
    </div>
  );
};

export default InfoBtn;
