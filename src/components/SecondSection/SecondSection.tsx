import Image from "next/image";
import styles from "./SecondSection.module.scss";
import { Button } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselConfig } from "@/constants/carousel/constants";
import { constants } from "@/constants/secondSection/constants";
import { useRouter } from 'next/router';

const SecondSection = () => {
    const router = useRouter();
    const handleClick = (option: string) => {
        switch (option) {
          case 'Generator':
            router.push({
                pathname: '/products',
                query: { currentTab: 'Diesel Generator' }
            });
            break;
          case 'Screw Compressor':
            router.push({
                pathname: '/products',
                query: { currentTab: 'Stationary Screw Compressor' }
            });
            break;
          case 'Gripper':
            router.push({
                pathname: '/products',
                query: { currentTab: 'Gripper' }
            });
            break;
          case 'Scissor Lift':
            router.push({
                pathname: '/products',
                query: { currentTab: 'Scissor Lift' }
            });
            break;
          case 'Compactor':
            router.push({
                pathname: '/products',
                query: { currentTab: 'Stationary Compactor' }
            });
            break;
          default:
            router.push({
                pathname: '/products',
                query: { currentTab: option }
            });
            break;
        }
    }
    const handleDownloadBrochure = () => {
        const link = document.createElement('a');
        link.href = '/Main_Brochure.pdf';
        link.download = 'Main_Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
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
                                    onClick={() => handleClick(c.title)}
                                >
                                    {constants.buttonText}
                                </Button>
                                <Button
                                    variant="outlined"
                                    className={styles.downloadButton}
                                    onClick={handleDownloadBrochure}
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
