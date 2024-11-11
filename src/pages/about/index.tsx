import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "@/components/Layout/Layout";
import styles from "./About.module.scss";
import { constants } from "@/constants/about/constants";

const About = () => {
  const hasWindow = typeof window !== 'undefined';
  const [windowDimensions, setWindowDimensions] = useState({
    width: hasWindow ? window.innerWidth : 0,
    height: hasWindow ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getClassName = (index: number) => {
    if(windowDimensions.width > 640) {
      if(index % 2 !== 0) {
        return 'row-reverse';
      } else return 'row';
    } else {
      return 'column';
    }
  }

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
              className={styles.feature}
              style={{flexDirection: getClassName(i)}}
            >
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
