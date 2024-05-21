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

const images = [mhm, asad, asad1, r1, holding, cyan];

const ThirdSection = () => {
  return (
    <div className={styles.container}>
      <Image src={Wedge} alt="Wedge image" className={styles.wedge} />
      <div className={styles.mainSection}>
        <div className={styles.leftSection}>
          <span className={styles.titleText}>Found in the biggest cities</span>
          <span className={styles.descriptionText}>
            Thwainy Industries is a leading provider of advanced power
            generation solutions and city maintenance equipment, specializing in
            diesel generators, screw compressors, trash compactors, block
            grippers, and scissor lifts. Our state-of-the-art products are
            designed for exceptional performance and reliability, catering to
            the diverse demands of the power and city infrastructure sectors.
            Choose Thwainy Industries for innovative solutions that drive
            efficiency and effectiveness in your operations.
          </span>
          <Button variant="contained" className={styles.brochureButton}>
            Read More
          </Button>
        </div>
        <div className={styles.rightSection}>
          {images.map((i, index) => (
            <Image key={index} src={i} alt="Image" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
