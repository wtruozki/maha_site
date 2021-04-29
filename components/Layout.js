import Link from "next/link";

import styles from "./styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
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
      <div className={styles.bars}>
        <span></span>
        <span></span>
      </div>
      <div className={styles.wrapper}>{children}</div>

      <footer className={styles.footer}>
        <p>マハラジャ六本木　公式ホームページ</p>
        <img src="logo.png" />
        <p>公式SNS</p>

        <small className={styles.copy}>&copy; 2021 MAHARAJA </small>
      </footer>
    </>
  );
};

export default Layout;
