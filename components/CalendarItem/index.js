import { common } from "@material-ui/core/colors";
import styles from "./styles.module.css";

const CarendarItem = (date) => {
  switch (date) {
    case "月":
      return {
        title: `70s, 80s${(<br />)}ディスコ`,
        hh: "Happy hour",
      };

    default:
      break;
  }

  return <div></div>;
};

export default CarendarItem;
