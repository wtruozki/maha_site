import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import styles from "./styles.module.css";
import SideBar from "../SideBar";

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
              <a className={styles.logo}>
                <Image src="/logo1.png" alt="ロゴ" width="80px" height="20px" />
              </a>
            </>
          </Link>
        </div>
      </header>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          {children}

          <footer className={styles.footer}>
            <Image src="/logo.png" alt="ロゴ" width="80px" height="50px" />
            <p>公式SNS</p>
            <div className={styles.sns}>
              <a
                href="https://www.facebook.com/MAHARAJA.ROPPONGI/"
                target="_brank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/f_logo_RGB-Blue_72.png"
                  alt="facebook"
                  width="30px"
                  height="30px"
                />
              </a>
              <a
                href="https://www.instagram.com/maharaja_roppongi/"
                target="_brank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Instagram_Glyph_Gradient_RGB.png"
                  alt="インスタ"
                  width="30px"
                  height="30px"
                />
              </a>
              <a
                href="https://page.line.me/maharaja-roppongi"
                target="_brank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/LINE LOGO.png"
                  alt="ライン"
                  width="30px"
                  height="30px"
                />
              </a>
              <a
                href="https://twitter.com/maharaja_rp"
                target="_brank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Logo_1_.png"
                  alt="twitter"
                  width="30px"
                  height="30px"
                />
              </a>
            </div>

            <div className={styles.footerContents}>
              <Link href="/sitemap" passHref>
                <a>サイトマップ</a>
              </Link>

              <Link href="/policy" passHref>
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
