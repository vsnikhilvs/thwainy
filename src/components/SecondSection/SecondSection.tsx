import Image from "next/image";
import styles from "./SecondSection.module.scss";
import Wedge from "@/assets/wedge.svg";
import { Button } from "@mui/material";
import Slider from "react-slick";
import bunded from "@/assets/bunded.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CarouselNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#ffffff",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
const settings = {
  dots: true,
  infinite: true,
  centerMode: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <CarouselNextArrow />,
  nextArrow: <CarouselNextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SecondSection = () => {
  return (
    <div className={styles.container}>
      <Image src={Wedge} alt="Wedge image" className={styles.wedge} />
      <div className={styles.mainSection}>
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
          <div className={styles.carouselItem}>
            <div className={styles.carouselImage}>
              <Image
                src={bunded}
                alt="Generator Image"
                className={styles.carouselItemImage}
              />
            </div>
            <div className={styles.carouselContent}>
              <span className={styles.carouselTitle}>Bunded Tank</span>
              <span className={styles.carouselDescription}>
                Expertly crafted, our Bunded tanks ensure the secure storage and
                transportation of diesel fuel. These tanks function as auxiliary
                fuel sources, effectively fueling many engines and additional
                equipment via a dedicated pump. All enclosed within a lockable
                access hatch for maximum safety.
              </span>
              <div className={styles.carouselFeatures}>
                <div className={styles.carouselFeatureItem}>
                  <span className={styles.carouselFeatureTitle}>
                    STACKABLE CORNER BRACKETS
                  </span>
                  <span className={styles.carouselFeatureDescription}>
                    Stack with ease using our stackable corner brackets,
                    allowing convenient stacking of up to two units when empty.
                  </span>
                </div>
                <div className={styles.carouselFeatureItem}>
                  <span className={styles.carouselFeatureTitle}>
                    REMOVABLE INNER TANK
                  </span>
                  <span className={styles.carouselFeatureDescription}>
                    Effortlessly maintain and inspect your tank with the
                    convenience of a removable inner tank.
                  </span>
                </div>
                <div className={styles.carouselFeatureItem}>
                  <span className={styles.carouselFeatureTitle}>
                    TWO WAY FORKLIFT POCKETS
                  </span>
                  <span className={styles.carouselFeatureDescription}>
                    Facilitate swift and effortless mobility with the inclusion
                    of two-way forklift pockets, ensuring convenient
                    maneuvering.
                  </span>
                </div>
              </div>
              <Button variant="contained" className={styles.brochureButton}>
                Know More
              </Button>
            </div>
          </div>
          <div className={styles.carouselItem}>
            <div className={styles.carouselImage}>
              <Image
                src={bunded}
                alt="Generator Image"
                className={styles.carouselItemImage}
              />
            </div>
            <div className={styles.carouselContent}>
              <span className={styles.carouselTitle}>Bunded Tank</span>
              <span className={styles.carouselDescription}>
                Expertly crafted, our Bunded tanks ensure the secure storage and
                transportation of diesel fuel. These tanks function as auxiliary
                fuel sources, effectively fueling many engines and additional
                equipment via a dedicated pump. All enclosed within a lockable
                access hatch for maximum safety.
              </span>
              <div className={styles.carouselFeatures}>
                <div className={styles.carouselFeatureItem}>
                  <span className={styles.carouselFeatureTitle}>
                    STACKABLE CORNER BRACKETS
                  </span>
                  <span className={styles.carouselFeatureDescription}>
                    Stack with ease using our stackable corner brackets,
                    allowing convenient stacking of up to two units when empty.
                  </span>
                </div>
                <div className={styles.carouselFeatureItem}>
                  <span className={styles.carouselFeatureTitle}>
                    REMOVABLE INNER TANK
                  </span>
                  <span className={styles.carouselFeatureDescription}>
                    Effortlessly maintain and inspect your tank with the
                    convenience of a removable inner tank.
                  </span>
                </div>
                <div className={styles.carouselFeatureItem}>
                  <span className={styles.carouselFeatureTitle}>
                    TWO WAY FORKLIFT POCKETS
                  </span>
                  <span className={styles.carouselFeatureDescription}>
                    Facilitate swift and effortless mobility with the inclusion
                    of two-way forklift pockets, ensuring convenient
                    maneuvering.
                  </span>
                </div>
              </div>
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

export default SecondSection;
