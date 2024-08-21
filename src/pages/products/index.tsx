import Layout from "@/components/Layout/Layout";
import styles from "./Products.module.scss";
import { constants } from "@/constants/products/constants";
import {  useEffect, useState } from "react";
import { Tabs, Tab, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/router';

const Products = () => {
  const router = useRouter(); 
  const { currentTab } = router.query;
  const [width, setWidth] = useState(0);
  const [tab, setTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/Main_Brochure.pdf';
    link.download = 'Main_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleSuperScriptInDescription = (item: string) => {
    if(item === 'Fewer CO2 Emmisions') {
      return <span>Fewer CO<sub>2</sub> Emmisions</span>
    } else if(item === '0.8 - 14.2 m3/s') {
      return <span>0.8 - 14.2 m<sup>3</sup>/s</span>
    } else if(item === '1.15 m3') {
      return <span>1.15 m<sup>3</sup></span>
    } else if(item === '95 m3 (theoretical)') {
      return <span>95 m<sup>3</sup> (theoretical)</span>
    } else return item;
  }

  useEffect(() => {
    if (typeof currentTab === 'string') {
      switch (currentTab) {
        case 'Diesel Generator':
          setTab(0);
          break;
        case 'Stationary Screw Compressor':
          setTab(1);
          break;
        case 'Gripper':
          setTab(2);
          break;
        case 'Scissor Lift':
          setTab(3);
          break;
        case 'Stationary Compactor':
          setTab(4);
          break;
        default:
          setTab(0);
          break;
      }
    }
  }, [currentTab]);

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
        {constants.data.map((d, index) => {
          return (
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
                  'screwcompressor' : 
                  d.categoryId === 'gripper' ?
                  'gripper' : 
                  d.categoryId === 'scissorlift' ?
                  'lift' : 
                  d.categoryId === 'compactor' ?
                  'compactor' : 
                  'generators'}.jpg)`
                  }}
                >
                <div className={styles.bannerLiterals}>
                  <span className={styles.bannerTitle}>{d.value.title}</span>
                  <span className={styles.bannerDesc}>{d.value.description}</span>
                  <Button variant="contained" className={styles.brochureButton} onClick={handleDownloadBrochure}>
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
                        <span className={styles.ftTitle}>
                          {f.title.includes('CO2') ? handleSuperScriptInDescription(f.title) : f.title}
                        </span>
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
                  'generator_spec' : 
                  d.categoryId === 'screwcompressor' ?
                  'screwcompressor_spec' : 
                  d.categoryId === 'gripper' ?
                  'gripper_spec' : 
                  d.categoryId === 'scissorlift' ?
                  'lift_spec' : 
                  d.categoryId === 'compactor' ?
                  'compactor_spec' : 
                  'generators'}.jpg)` : 'none'
                  }}
                >
                <div className={styles.specHeader}>{'Specifications'}</div>
                <table className={styles.specTable}>
                  {d.value.specification.map(s => (
                    <tr key={s.item}>
                      <td className={styles.firstColumn}>{s.item}</td>
                      <td className={styles.valueColumn}>{handleSuperScriptInDescription(s.value)}</td>
                    </tr>
                  ))}
                </table>
                <Button variant="outlined" className={styles.brochureButton} onClick={handleDownloadBrochure}>
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
          )
        })}
      </div>
    </Layout>
  );
};

export default Products;
