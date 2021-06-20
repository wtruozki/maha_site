import { useEffect } from "react";
import styles from "./styles.module.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
const HomeSection = ({ heading, children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: "50px",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className={styles.container}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
    >
      <section>
        <h2 className={styles.heading}>{heading}</h2>
        <span className={styles.bar}></span>
      </section>

      <div>{children}</div>
    </motion.div>
  );
};

export default HomeSection;
