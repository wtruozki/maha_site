import Link from "next/link";
import styles from "./styles/Blog.module.css";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const Blogs = ({ blog, types }) => {
  const date = dayjs.utc(blog.createdAt).tz("Asia/Tokyo").format("YYYY-MM-DD");

  return (
    <article>
      <ul className={styles.lists}>
        <div className={types === "whats" ? styles.viewAll : styles.none}>
          <Link href="/news">
            <a className={styles.all}>全て表示する</a>
          </Link>
        </div>
        {blog.slice(0, 2).map((blog) => (
          <li className={styles.list} key={blog.id}>
            <time>{date}</time>
            <div className={styles.titleContainer}>
              {blog.image ? (
                <div>
                  <img
                    className={styles.titleImg}
                    src={blog.image.url}
                    alt={blog.title}
                  />
                </div>
              ) : (
                ""
              )}

              <Link href={`${types}/${blog.id}`}>
                <div className={styles.container}>
                  <a className={styles.title}>{blog.title}</a>
                  <p>{blog.day}</p>
                </div>
              </Link>
            </div>
            <span className={styles.tag}>{blog.tag}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Blogs;
