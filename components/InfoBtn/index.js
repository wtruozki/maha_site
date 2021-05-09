import styles from "./styles.module.css";
import Link from "next/link";

const InfoItem = ({ image, title, linkUrl }) => {
  return (
    <div className={styles.container}>
      <Link href={linkUrl}>
        <div className={styles.item}>
          <img src={image} alt={title} />
          <p className={styles.title}>{title}</p>
        </div>
      </Link>
    </div>
  );
};

const InfoBtn = () => {
  return (
    <div className={styles.infoContainer}>
      <InfoItem title="Party Plan" image="bottle.png" linkUrl="/plan" />
      <InfoItem title="Rental" image="rental.png" linkUrl="/rental" />

      <InfoItem title="Mail Magazine" image="mail.png" linkUrl="/magazine" />
      <InfoItem title="Members Card" image="members.png" linkUrl="/members" />
      <InfoItem title="Recruit" image="recruit.png" linkUrl="/recruit" />
      <div className={styles.container}>
        <a
          href="https://maharaja.thebase.in/"
          target="_brank"
          rel="noopener noreferrer"
        >
          <div className={styles.item}>
            <div className={styles.imageContainer}>
              <img src="/shop.png" alt="webstore" />
            </div>
            <p className={styles.title}> Web Store</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default InfoBtn;
