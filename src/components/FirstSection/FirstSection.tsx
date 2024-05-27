import Image from "next/image";
import styles from "./FirstSection.module.scss";
import Wedge from "@/assets/wedge.svg";
import { Button } from "@mui/material";
import Slider from "react-slick";
import machine from "@/assets/firstSectionMachine.png";
import compactor from "@/assets/compactor.gif";

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
        <Slider {...settings}>
          <div>
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
          <div>
            <Image
              src={machine}
              alt="Generator Image"
              className={styles.carouselImage}
            />
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FirstSection;
