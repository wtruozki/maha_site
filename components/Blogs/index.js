import { useEffect, useRef } from "react";

import Link from "next/link";
import styles from "./styles.module.css";
import dayjs from "dayjs";

import "dayjs/locale/ja";

import { motion, useElementScroll } from "framer-motion";
import EventCarousel from "../EventCarousel";

const Blogs = ({ blog, types }) => {
  const ref = useRef();
  const { scrollYProgress } = useElementScroll(ref);
  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      console.log(latest);
    });
  }, []);
  return (
    <article ref={ref}>
      <ul className={styles.lists}>
        <div className={types === "whats" ? styles.viewAll : styles.none}>
          <Link href="/news">
            <a className={styles.all}>全て表示する</a>
          </Link>
        </div>
        {blog.slice(0, 2).map((blog) => {
          const d = dayjs(blog.publishedAt).locale("ja").format("YYYY-MM-DD");
          return (
            <li className={styles.list} key={blog.id}>
              <time>{d}</time>
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
                    <h3 className={styles.title}>{blog.title}</h3>
                  </div>
                </Link>
              </div>
              <span className={styles.tag}>{blog.tag}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Blogs;
