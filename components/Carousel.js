import styles from "./styles/Carousel.module.css";
import Slider from "react-slick";

import { useState } from "react";

const Carousel = ({ images }) => {
  const settings = {
    infinite: true,
    lazyLoad: "ondemand",
    speed: 300,
    slidesToShow: 3,
    centerPadding: 0,
    centerMode: true,
    dots: true,
    autoplay: true,
    beforeChange: (current, next) => setState(next),
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,

          infinite: true,

          dots: true,
          centerMode: true,
          centerPadding: "50px",
        },
      },
    ],
  };
  const [state, setState] = useState(0);

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === state ? styles.active : styles.slide}>
            <img className={styles.item} src={img} alt={img} key={idx} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
