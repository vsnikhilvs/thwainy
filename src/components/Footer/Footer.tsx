import Logo from "@/assets/Logo.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footerSection}>
      <div className={styles.smallRectangle}></div>
      <div className={styles.footerContent}>
        <Image src={Logo} alt={"Logo"} className={styles.logo} />
        <div className={styles.addressSection}>
          <span className={styles.addressTitle}>Address</span>
          <span className={styles.addressDesc}>Thwainy Industries</span>
          <span className={styles.addressDesc}>
            2518 Alrawdhah St., 7970 3rd Industrial City,
          </span>
          <span className={styles.addressDesc}>
            P.O Box 48073, Jeddah 21572. Saudi Arabia.
          </span>
        </div>
        <div className={styles.contactSection}>
          <span className={styles.addressTitle}>Contact</span>
          <span className={styles.addressDesc}>
            Tel : 00966 12 6140441 | 920015441
          </span>
          <span className={styles.addressDesc}>info@thwainy.com</span>
        </div>
      </div>
      <div className={styles.menuContent}>© All rights reserved</div>
    </div>
  );
};

export default Footer;
