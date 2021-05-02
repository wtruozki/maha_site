import Link from "next/link";
import { useState } from "react";

import styles from "./styles/Carousel.module.css";
import Slider from "react-slick";

const Carousel = ({ pickup }) => {
  const settings = {
    infinite: true,
    lazyLoad: "ondemand",
    speed: 300,
    slidesToShow: 3,
    centerPadding: 0,
    centerMode: true,
    dots: true,
    autoplay: true,
    arrows: true,
    beforeChange: (current, next) => setState(next),
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "60px",
        },
      },
    ],
  };

  const [state, setState] = useState(0);

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {pickup.map((val, idx) => {
          const confirm = idx === state;
          return (
            <div className={confirm ? styles.active : styles.slide} key={idx}>
              <Link href={`pickup/${val.id}`}>
                <img
                  className={styles.item}
                  src={val.image.url}
                  alt={val.title}
                  key={idx}
                />
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Carousel;
