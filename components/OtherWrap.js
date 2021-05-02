import styles from "./styles/OtherWrap.module.css";

const OtherWrap = ({ children, heading }) => {
  let color = styles.none;
  switch (heading) {
    case "schedule":
      color = styles.cy;
      break;
    case "contact":
      color = styles.ye;
      break;
    case "access":
      color = styles.ma;
      break;
    default:
      break;
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={color}>
          <h2>{heading.toUpperCase()}</h2>
        </div>
        <div className={styles.container}>{children}</div>
      </div>
    </>
  );
};

export default OtherWrap;
