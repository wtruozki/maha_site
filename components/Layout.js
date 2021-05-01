import Link from "next/link";
import Head from "next/head";
import styles from "./styles/Layout.module.css";
import SideBar from "./SideBar";

import { motion } from "framer-motion";

const Layout = ({ children, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={styles.header}>
        <div>
          <Link href="/">
            <>
              <h1>MAHARAJA</h1>
              <a>
                <img className={styles.logo} src="logo1.png" alt="ロゴ" />
              </a>
            </>
          </Link>
        </div>
      </header>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          {children}

          <footer className={styles.footer}>
            <img src="logo.png" alt="ロゴ" />
            <p>公式SNS</p>
            <div className={styles.sns}>
              <img src="f_logo_RGB-Blue_72.png" alt="ロゴ" />
              <img src="Instagram_Glyph_Gradient_RGB.png" alt="ロゴ" />
              <img src="LINE LOGO.png" alt="ロゴ" />
              <img src="Logo_1_.png" alt="ロゴ" />
            </div>

            <div className={styles.footerContents}>
              <Link href="/">
                <a>サイトマップ</a>
              </Link>
              <Link href="/">
                <a>お問い合わせ</a>
              </Link>
              <Link href="/">
                <a>サイトポリシー</a>
              </Link>
            </div>

            <small className={styles.copy}>&copy; 2021 MAHARAJA </small>
          </footer>
        </div>
        <SideBar />
      </div>
    </motion.div>
  );
};

export default Layout;
