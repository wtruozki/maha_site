import Image from "next/image";
import AccessMap from "../components/AccessMap";
import Layout from "../components/Layout";
import OtherWrap from "../components/OtherWrap";

import styles from "../styles/Access.module.css";

const Access = () => {
  return (
    <Layout title="ACCESS">
      <OtherWrap heading="access">
        <div className={styles.container}>
          <AccessMap />
        </div>
        <div className={styles.text}>
          <section className="">
            <h3>Addrress</h3>
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
        </div>
      </OtherWrap>
    </Layout>
  );
};

export default Access;
