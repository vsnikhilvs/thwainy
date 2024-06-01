import Image from "next/image";
import styles from "./ThirdSection.module.scss";
import Wedge from "@/assets/wedge.svg";
import { Button } from "@mui/material";
import mhm from "@/assets/mhm.png";
import asad from "@/assets/asad.png";
import asad1 from "@/assets/asad1.png";
import r1 from "@/assets/r1.png";
import holding from "@/assets/holding.png";
import cyan from "@/assets/cyan.png";
import { constants } from "@/constants/thirdSection/constants";

const images = [mhm, asad, asad1, r1, holding, cyan];

const ThirdSection = () => {
  return (
    <div className={styles.container}>
      <Image src={Wedge} alt="Wedge image" className={styles.wedge} />
      <div className={styles.mainSection}>
        <div className={styles.leftSection}>
          <span className={styles.titleText}>{constants.title}</span>
          <span className={styles.descriptionText}>
            {constants.description}
          </span>
          <Button variant="contained" className={styles.brochureButton}>
            {constants.buttonText}
          </Button>
        </div>
        <div className={styles.rightSection}>
          {images.map((i, index) => (
            <Image
              key={index}
              src={i}
              alt="Image"
              className={styles.carouselImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
