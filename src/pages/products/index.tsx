import Layout from "@/components/Layout/Layout";
import styles from "./Products.module.scss";
import { constants } from "@/constants/products/constants";
import {  useEffect, useState } from "react";
import { Tabs, Tab, Button } from "@mui/material";
import Image from "next/image";

const Products = () => {
  const [width, setWidth] = useState(0);
  const [tab, setTab] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Layout>
      <div className={styles.container}>
        <Tabs value={tab} onChange={handleChange} scrollButtons="auto" variant="scrollable">
          {constants.categories.map((c) => (
            <Tab key={c.categoryId} icon={c.icon} iconPosition="start" 
              label={c.title} id={c.categoryId} className={styles.tabStyle} 
            />
          ))}
        </Tabs>
        {constants.data.map((d, index) => (
          <div
            className={styles.machineTab}
            key={d.categoryId}
            hidden={tab !== index}
            id={d.categoryId}
          >
            <div className={styles.bannerSection + " " + d.categoryId} 
            style={{
              backgroundImage: `url(/${
                d.categoryId === 'generators' ? 
                'generator' : 
                d.categoryId === 'screwcompressor' ?
                'canopy' : 
                d.categoryId === 'gripper' ?
                'gripper' : 
                d.categoryId === 'scissorlift' ?
                'lift' : 
                d.categoryId === 'compactor' ?
                'tank' : 
                'generators'}.jpg)`
                }}
              >
              <div className={styles.bannerLiterals}>
                <span className={styles.bannerTitle}>{d.value.title}</span>
                <span className={styles.bannerDesc}>{d.value.description}</span>
                <Button variant="contained" className={styles.brochureButton}>
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className={styles.featureSection}>
              <span className={styles.featureMainTitle}>{"Product Description"}</span>
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
            <div className={styles.tableSection} 
            style={{
              backgroundImage: width >= 1280 ? `url(/${
                d.categoryId === 'generators' ? 
                'canopy_spec' : 
                d.categoryId === 'screwcompressor' ?
                'canopy_spec' : 
                d.categoryId === 'gripper' ?
                'gripper_spec' : 
                d.categoryId === 'scissorlift' ?
                'lift_spec' : 
                d.categoryId === 'compactor' ?
                'tank_spec' : 
                'generators'}.jpg)` : 'none'
                }}
              >
              <div className={styles.specHeader}>{'Specifications'}</div>
              <table className={styles.specTable}>
                {d.value.specification.map(s => (
                  <tr key={s.item}>
                    <td className={styles.firstColumn}>{s.item}</td>
                    <td className={styles.valueColumn}>{s.value}</td>
                  </tr>
                ))}
              </table>
              <Button variant="outlined" className={styles.brochureButton}>
                Download Brochure
              </Button>
              </div>
              {d.value.options && (
                <div className={styles.optionSection}>
                  <div className={styles.optionTitle}>{'Options'}</div>
                  <ul className={styles.optionList}>
                    {d.value.options.map((o, i) => (
                      <li key={i} className={styles.optionListItem}>{o}</li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Products;
