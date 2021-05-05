import { useState } from "react";
import styles from "./styles.module.css";
import Slider from "react-slick";

const EventCarousel = ({ event }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    slidesToShow: 3,
    swipe: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {event.map((val, idx) => {
          return (
            <div className={confirm ? styles.active : styles.slide} key={idx}>
              <img
                className={styles.item}
                src={val.image.url}
                alt={val.title}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default EventCarousel;
