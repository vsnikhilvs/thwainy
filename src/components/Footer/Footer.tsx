import Logo from "@/assets/Logo.svg";
import Image from "next/image";
import styles from "./Footer.module.scss";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.footerSection}>
      <div className={styles.smallRectangle}></div>
      <div className={styles.footerContent}>
          <Image src={Logo} alt={"Logo"} className={styles.logo} onClick={() => router.push("/")} />
        <a target="_blank" href="https://www.google.com/maps/place/21%C2%B007'06.2%22N+39%C2%B019'58.5%22E/@21.1183889,39.3329167,826m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d21.1183889!4d39.3329167?hl=en-US&entry=ttu">
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
        </a>
        <div className={styles.contactSection}>
          <span className={styles.addressTitle}>Contact</span>
          <span className={styles.addressDesc}>
            <a href="tel:00966126140441">Tel : 00966 12 6140441</a> | <a href="tel:920015441">920015441</a>
          </span>
          <span className={styles.addressDesc}><a href="mailto:info@thwainy.com">info@thwainy.com</a></span>
          <span className={styles.addressDesc}>&nbsp;</span>
        </div>
      </div>
      <div className={styles.menuContent}>© 2024 • Thwainy Industries • All rights reserved</div>
    </div>
  );
};

export default Footer;
