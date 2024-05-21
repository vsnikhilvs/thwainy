import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import styles from "./Header.module.scss";
import Link from "next/link";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <Image src={Logo} alt={"Logo"} />
        <div className={styles.menu}>
          <div className={styles.menuSection}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Products</Link>
              </li>
              <li>
                <Link href="/">News</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className={styles.langSection}>
            <span>EN</span>
          </div>
          <div className={styles.downloadSection}>
            <Button variant="outlined" className={styles.brochureButton}>
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.subContainer}>
        <Button variant="text" className={styles.subMenuButton}>
          Power
        </Button>
        <Button variant="text" className={styles.subMenuButton}>
          City Cleaning
        </Button>
        <Button variant="text" className={styles.subMenuButton}>
          Maintenance & Construction
        </Button>
      </div>
    </>
  );
};

export default Header;
