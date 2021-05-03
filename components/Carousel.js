import Modal from "react-modal";
import { useState } from "react";
import styles from "./styles/Carousel.module.css";
import Slider from "react-slick";

const Carousel = ({ pickup }) => {
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 800,
    },

    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#__next");

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

  const [isOpen, setIsOpen] = useState(false);
  const [isImg, setIsImg] = useState();

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
    setIsImg(e.target.src);
  };

  const closeModal = (e) => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {pickup.map((val, idx) => {
          const confirm = idx === state;
          return (
            <div className={confirm ? styles.active : styles.slide} key={idx}>
              <img
                onClick={openModal}
                className={styles.item}
                src={val.image.url}
                alt={val.title}
              />
            </div>
          );
        })}
      </Slider>
      <Modal
        className={styles.moodal}
        isOpen={isOpen}
        closeTimeoutMS={100}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={styles.modalContainer}>
          <img src={isImg} alt="test" className={styles.modal} />
          <p className={styles.modalText} onClick={closeModal}>
            close
          </p>
        </div>
      </Modal>
    </div>
  );
};
export default Carousel;
