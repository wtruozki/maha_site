import Link from "next/link";
import styles from "./styles/Blog.module.css";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const Blogs = ({ blog }) => {
  const date = dayjs
    .utc(blog.publishedAt)
    .tz("Asia/Tokyo")
    .format("YYYY-MM-DD");
  const newContent = blog.newContent ? "New" : "";

  return (
    <article>
      <ul className={styles.lists}>
        <div className={styles.viewAll}>
          <Link href="/">
            <a>全て表示する</a>
          </Link>
        </div>
        {blog.map((blog) => (
          <li className={styles.list} key={blog.id}>
            <time>{date}</time>
            <span>{newContent}</span>
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
              <Link href={`blog/${blog.id}`}>
                <a className={styles.title}>{blog.title}</a>
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
