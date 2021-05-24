import styles from "./styles.module.css";

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
    case "news":
      color = styles.gl;
      break;
    case "PARTY PLAN":
      color = styles.ol;
      break;
    case "RENTAL HALL":
      color = styles.pu;
      break;
    case "MEMBERS":
      color = styles.bl;
      break;
    case "MAIL MAGEZINE":
      color = styles.red;
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
