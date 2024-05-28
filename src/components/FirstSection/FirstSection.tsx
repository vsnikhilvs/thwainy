import Image from "next/image";
import styles from "./FirstSection.module.scss";
import Wedge from "@/assets/wedge.svg";
import { Button } from "@mui/material";
import compactor from "@/assets/compactor.gif";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const FirstSection = () => {
  return (
    <div className={styles.container}>
      <Image src={Wedge} alt="Wedge image" className={styles.wedge} />
      <div className={styles.mainSection}>
        <span className={styles.titleText}>
          Lorem ipsum dolor sitamet, tetuer adipiscing
        </span>
        <span className={styles.descriptionText}>
          Lorem ipsum dolor sit amet
        </span>
        <Button variant="contained" className={styles.brochureButton}>
          Download Brochure
        </Button>
      </div>
      <div className={styles.mainSectionRight}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={true}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 640,
              },
              items: 1,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 639,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 480,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className={styles.slickItem}>
            <Image
              src={compactor}
              alt="Generator Image"
              className={styles.carouselImage}
            />
            <div className={styles.carouselContent}>
              <span className={styles.carouselTitle}>
                Generators and Canopies
              </span>
              <span className={styles.carouselDescription}>
                Introducing our versatile generator solutions, available for
                both rental and sale, providing you with flexibility and
                convenience
              </span>
              <Button variant="contained" className={styles.brochureButton}>
                Know More
              </Button>
            </div>
          </div>
          <div className={styles.slickItem}>
            <Image
              src={compactor}
              alt="Generator Image"
              className={styles.carouselImage}
            />
            <div className={styles.carouselContent}>
              <span className={styles.carouselTitle}>
                Generators and Canopies
              </span>
              <span className={styles.carouselDescription}>
                Introducing our versatile generator solutions, available for
                both rental and sale, providing you with flexibility and
                convenience
              </span>
              <Button variant="contained" className={styles.brochureButton}>
                Know More
              </Button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default FirstSection;
