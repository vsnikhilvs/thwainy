import Layout from "@/components/Layout/Layout";
import styles from "./Products.module.scss";
import { constants } from "./constants";
import { useState } from "react";
import { Tabs, Tab, Button } from "@mui/material";
import Image from "next/image";

const Products = () => {
  const [tab, setTab] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  return (
    <Layout>
      <div className={styles.container}>
        <Tabs value={tab} onChange={handleChange}>
          {constants.categories.map((c) => (
            <Tab key={c.categoryId} label={c.title} id={c.categoryId} />
          ))}
        </Tabs>
        {constants.data.map((d, index) => (
          <div
            className={styles.machineTab}
            key={d.categoryId}
            hidden={tab !== index}
            id={d.categoryId}
          >
            <div className={styles.bannerSection}>
              <Image
                src={d.value.banner}
                alt="Banner Image"
                className={styles.machineBanner}
              />
              <div className={styles.bannerLiterals}>
                <span className={styles.bannerTitle}>{d.value.title}</span>
                <span className={styles.bannerDesc}>{d.value.description}</span>
                <Button variant="contained" className={styles.brochureButton}>
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className={styles.featureSection}>
              <span className={styles.featureMainTitle}>
                {d.categoryId === "generators"
                  ? "Performance Features"
                  : "Areas of Application"}
              </span>
              <div className={styles.features}>
                {d.value.features.map((f, index) => (
                  <div key={index} className={styles.featureItem}>
                    <Image src={f.image} width={35} height={35} alt={"Logo"} />
                    <div className={styles.featureLiterals}>
                      <span className={styles.ftTitle}>{f.title}</span>
                      <span className={styles.ftDescription}>
                        {f.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Products;
