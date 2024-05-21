import Image from "next/image";
import styles from "./SecondSection.module.scss";
import Wedge from "@/assets/wedge.svg";
import { Button } from "@mui/material";
import Slider from "react-slick";
import bunded from "@/assets/bunded.png";

function CarouselNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#a7a7a7",
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
        <Slider {...settings}>
          <div className={styles.carouselItem}>
            <div className={styles.carouselImage}>
              <Image
                // width={150}
                // height={150}
                src={bunded}
                alt="Generator Image"
                style={{ objectFit: "cover" }}
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
                // width={150}
                // height={150}
                src={bunded}
                alt="Generator Image"
              />
            </div>
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
        </Slider>
      </div>
    </div>
  );
};

export default SecondSection;
