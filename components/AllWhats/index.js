import styles from "./styles.module.css";
import Link from "next/link";

import dayjs from "dayjs";
import "dayjs/locale/ja";

const AllWhats = ({ props }) => {
  const d = dayjs(props.publishedAt).locale("ja").format("YYYY-MM-DD");
  return (
    <li className={styles.list} key={props.id}>
      <time>{d}</time>
      <Link href={`whats/${props.id}`}>
        <div className={styles.container}>
          <p className={styles.title}>{props.title}</p>
          <p>{props.day}</p>
        </div>
      </Link>
      <span className={styles.tag}>{props.tag}</span>
    </li>
  );
};
export default AllWhats;
