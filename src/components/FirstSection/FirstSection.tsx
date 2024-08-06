import Image from "next/image";
import styles from "./FirstSection.module.scss";
import Wedge from "@/assets/wedge.svg";
import { Button } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { constants } from "@/constants/firstSection/constants";
import { carouselConfig } from "@/constants/carousel/constants";

const FirstSection = () => {
  return (
    <div className={styles.container}>
      <Image src={Wedge} alt="Wedge image" className={styles.wedge} />
      <div className={styles.mainSection}>
        <span className={styles.titleText}>
          {constants.title.split(', ')[0] + ','}
        </span>
        <span className={styles.titleText}>
          {constants.title.split(', ')[1]}
        </span>
        <span className={styles.descriptionText}>{constants.description}</span>
        <Button variant={"contained"} className={styles.brochureButton}>
          {constants.downloadBrochureButtonText}
        </Button>
      </div>
      <div className={styles.mainSectionRight}>
        <Carousel
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          itemClass=""
          sliderClass=""
          {...carouselConfig}
        >
          {constants.carouselItems.map((c, i) => (
            <div key={i} className={styles.slickItem}>
              <div className={styles.imageSection}>
                <Image
                  src={c.image}
                  alt={c.itemAltText}
                  className={styles.carouselImage}
                />
              </div>
              <div className={styles.carouselContent}>
                <span className={styles.carouselTitle}>{c.title}</span>
                <span className={styles.carouselDescription}>
                  {c.description}
                </span>
                <Button variant={"contained"} className={styles.brochureButton}>
                  {c.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FirstSection;
