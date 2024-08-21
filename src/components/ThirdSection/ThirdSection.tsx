import Image from "next/image";
import styles from "./ThirdSection.module.scss";
import { Button } from "@mui/material";
import mhm from "@/assets/mhm.png";
import asad from "@/assets/asad.png";
import asadindustries from "@/assets/asad_industries.png";
import althinayyanhg from "@/assets/althinayyanhg.png";
import ri from "@/assets/ri.png";
import mw from "@/assets/mw.png";
import cyan from "@/assets/cyan.png";
import { constants } from "@/constants/thirdSection/constants";
import { useRouter } from "next/router";

const images = [mhm, asad, mw, ri, cyan, althinayyanhg, asadindustries];

const ThirdSection = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <div className={styles.leftSection}>
          <span className={styles.titleText}>{constants.title}</span>
          <span className={styles.descriptionText}>
            {constants.description}
          </span>
          <Button variant="contained" className={styles.brochureButton} onClick={() => router.push("/about")}>
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
