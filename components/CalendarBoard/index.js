import styles from "./styles.module.css";
import { GridList } from "@material-ui/core";
import Modal from "react-modal";
import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";

import { getImage } from "../../lib/schedule";

import { motion } from "framer-motion";

dayjs.locale("ja");

const firstDay = dayjs().startOf("month");
const firstDayIndex = firstDay.day();
const createCalendar = () => {
  return Array(42)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");
      return day;
    });
};

const month = dayjs().format("YYYY年 MMMM");
const date = ["SUN", "MON", "TUE", "WED", "THU", "FRY", "SAT"];
const calendar = createCalendar();

const CalendarBoard = () => {
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
      <section className={styles.about}>
        <h3> {month} </h3>
        <div className={styles.layout}>
          <div className={styles.genreContainer}>
            <p className={styles.genre}>
              <span className={styles.colors1}></span>ALL MIX
            </p>
            <p className={styles.genre}>
              <span className={styles.colors2}></span>70'sDISCO中心
            </p>
            <p className={styles.genre}>
              <span className={styles.colors3}></span>80'sDISCO中心
            </p>
            <p className={styles.genre}>
              <span className={styles.colors4}></span>パラパラ
            </p>
            <p className={styles.genre}>
              <span className={styles.colors5}></span>TRANCE
            </p>
            <p className={styles.genre}>
              <span className={styles.colors6}> </span>歌謡曲
            </p>
            <p className={styles.genre}>
              <span className={styles.colors7}></span>70sSOUL&80sDISCO
            </p>
          </div>
          <div className={styles.time}>
            <p>
              月曜日〜木曜日
              <br /> 19：00~24:00
            </p>
            <p>
              金曜日、土曜日、祝前日 <br />
              19:00~5:00
            </p>
          </div>
        </div>
      </section>
      <GridList className={styles.date} cols={7} spacing={0} cellHeight="auto">
        {date.map((d, i) => (
          <li key={i}>
            <p>{d}</p>
          </li>
        ))}
      </GridList>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {calendar.map((c, i) => {
          const today = dayjs();
          const compareFormat = "YYYYMMDD";
          const isToday =
            c.format(compareFormat) === today.format(compareFormat);

          return (
            <li className={styles.elements} key={c.toISOString()}>
              <p className={isToday ? styles.today : styles.other}>
                {c.format("D")}
              </p>
              <div className={styles.element} onClick={openModal}>
                <img
                  src={
                    c.format("MMD") === "0731"
                      ? "/home3.png"
                      : getImage(c.format("ddd"))
                  }
                  className={styles.resultImg}
                />
              </div>
            </li>
          );
        })}
      </GridList>
      <Modal
        className={styles.moodal}
        isOpen={isOpen}
        closeTimeoutMS={100}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <motion.div
          className={styles.modalContainer}
          initial={{ y: "-50px" }}
          animate={{ y: 0 }}
        >
          <img src={isImg} alt="test" className={styles.modal} />
          <p className={styles.modalText} onClick={closeModal}>
            close
          </p>
        </motion.div>
      </Modal>
    </div>
  );
};

export default CalendarBoard;
