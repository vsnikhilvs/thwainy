import Image from "next/image";
import styles from "./SecondSection.module.scss";
import { Button } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselConfig } from "@/constants/carousel/constants";
import { constants } from "@/constants/secondSection/constants";

const SecondSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainSection}>
                <Carousel
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    itemClass=""
                    sliderClass=""
                    {...carouselConfig}
                >
                    {constants.carouselItems.map((c, i) => (
                        <div key={i} className={styles.carouselItem}>
                            <div className={styles.carouselImage}>
                                <Image
                                    src={c.image}
                                    alt={c.itemAltText}
                                    className={styles.carouselItemImage}
                                />
                            </div>
                            <div className={styles.carouselContent}>
                                <span className={styles.carouselTitle}>
                                    {c.title}
                                </span>
                                <span className={styles.carouselDescription}>
                                    {c.description}
                                </span>
                                <Button
                                    variant="contained"
                                    className={styles.brochureButton}
                                >
                                    {constants.buttonText}
                                </Button>
                                <Button
                                    variant="outlined"
                                    className={styles.downloadButton}
                                >
                                    {constants.downloadBrochureText}
                                </Button>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default SecondSection;
