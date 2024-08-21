import Image from "next/image";
import styles from "./FirstSection.module.scss";
import Wedge from "@/assets/wedge.svg";
import { Button } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { constants } from "@/constants/firstSection/constants";
import { carouselConfig } from "@/constants/carousel/constants";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';

const FirstSection = () => {
  const router = useRouter();
  const handleClick = (option: string) => {
    switch (option) {
      case 'Generators and Canopies':
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
      <Image src={Wedge} alt="Wedge image" className={styles.wedge} />
      <div className={styles.mainSection}>
        <span className={styles.titleText}>
          {constants.title.split(', ')[0] + ','}
        </span>
        <span className={styles.titleText}>
          {constants.title.split(', ')[1]}
        </span>
        <span className={styles.descriptionText}>{constants.description}</span>
        <Button variant={"contained"} className={styles.brochureButton} onClick={handleDownloadBrochure}>
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
                  <div className={styles.carouselInfo}>
                    <div className={styles.carouselInfoTitle}>{'Information'}</div>
                    {c.information?.map(i => (
                      <span className={styles.infoItem} key={i}><CheckCircleIcon color="action" />{i}</span>
                    ))}
                  </div>
                  {c.versions && <div className={styles.carouselInfo}>
                    <div className={styles.carouselInfoTitle}>{'Versions'}</div>
                    {c.versions?.map(i => (
                      <span className={styles.infoItem} key={i}><AddIcon color="action" />{i}</span>
                    ))}
                  </div>}
                </span>
                <Button variant={"contained"} className={styles.brochureButton} onClick={() => handleClick(c.title)}>
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
