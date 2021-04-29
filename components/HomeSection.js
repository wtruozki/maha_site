import styles from "./styles/HomeSection.module.css";

const HomeSection = ({ heading, children }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>{heading}</h2>
      <span className={styles.bar}></span>
      <div>{children}</div>
    </section>
  );
};

export default HomeSection;
