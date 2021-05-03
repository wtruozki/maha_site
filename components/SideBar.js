import Link from "next/link";
import Image from "next/image";

import styles from "./styles/SideBar.module.css";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="ロゴ" width={80} height={50} />
        </div>
      </div>
      <aside className={styles.aside}>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <p className={styles.tagText}>HOME</p>
                  <svg
                    className={styles.tag}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      strokeWidth={2}
                    />
                  </svg>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/schedule">
                <a>
                  <p className={styles.tagText}>SCHEDULE</p>

                  <svg
                    className={styles.tag}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </Link>
            </li>
            <li>
              <a
                href="https://reserva.be/maharajar"
                target="_brank"
                rel="noopener noreferrer"
              >
                <p className={styles.tagText}>RESERVE</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.tag}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </a>
            </li>
            <li>
              <Link href="/access">
                <a>
                  <p className={styles.tagText}>ACCESS</p>
                  <svg
                    className={styles.tag}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>
                  <p className={styles.tagText}>CONTACT</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.tag}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.footer}>
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
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
