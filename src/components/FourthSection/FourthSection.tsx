import Image from "next/image";
import styles from "./FourthSection.module.scss";
import { title, features } from "../../constants/fourthSection/constants";

const FourthSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <div className={styles.whySection}>
          <span className={styles.sectionTitle}>{title}</span>
          <div className={styles.features}>
            {features.map((f, index) => (
              <div key={index} className={styles.featureItem}>
                <Image
                  src={f.logo}
                  className={styles.featureImage}
                  alt={"Logo"}
                />
                <div className={styles.featureLiterals}>
                  <span className={styles.ftTitle}>{f.title}</span>
                  <span className={styles.ftDescription}>{f.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
