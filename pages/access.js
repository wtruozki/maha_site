import { useEffect } from "react";
import AccessMap from "../components/AccessMap";
import Layout from "../components/Layout";
import OtherWrap from "../components/OtherWrap";
import { useInView } from "react-intersection-observer";

import { motion, useAnimation } from "framer-motion";
import styles from "../styles/Access.module.css";

const Access = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
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
    <Layout title="ACCESS">
      <OtherWrap heading="access">
        <div className={styles.container}>
          <AccessMap />
        </div>
        <motion.div
          className={styles.text}
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
        >
          <section>
            <h3>Address</h3>
          </section>
          <p> 〒106-0032 東京都港区六本木6-1-3 六門ビル6F</p>
          <section>
            <h3>Phone</h3>
          </section>
          <p>03-6804-1798</p>
          <section>
            <h3>Fax</h3>
          </section>
          <p>03-6804-1799</p>
          <small>
            *当店、ドレスコードがございます。ご不明点はお問い合わせください。
          </small>
        </motion.div>
      </OtherWrap>
    </Layout>
  );
};

export default Access;
