import Layout from "@/components/Layout/Layout";
import styles from "./About.module.scss";
import Image from "next/image";
import { constants } from "@/constants/about/constants";

const About = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.mainSection} 
            style={{
              backgroundImage: `url(/aboutBanner.jpg)`
            }}
          >
            <span className={styles.titleText}>{constants.title}</span>
          </div>
        </div>
        <div className={styles.featureSection}>
          {constants.features.map((f, i) => (
            <div
              key={i}
              className={
                styles.feature +
                " " +
                (i % 2 !== 0 ? styles.reverse : styles.normal)
              }
            >
              {i}
              {i%2}
              <Image
                src={f.image}
                width={732}
                height={436}
                alt="Feature Image"
                className={styles.carouselImage}
              />
              <span className={styles.featureContent}>{f.content}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;
