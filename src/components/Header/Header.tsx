"use client";

import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import styles from "./Header.module.scss";
import Link from "next/link";
import {
  Button,
  Fade,
  Paper,
  Popper,
  PopperPlacementType,
  Typography,
} from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();
  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };
  return (
    <>
      <div className={styles.container}>
        <Image src={Logo} alt={"Logo"} />
        <div className={styles.menu}>
          <div className={styles.menuSection}>
            <ul>
              <li>
                <Link
                  href="/"
                  className={
                    pathname === "/" ? styles.activeMenu : styles.inActiveMenu
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={
                    pathname === "/about"
                      ? styles.activeMenu
                      : styles.inActiveMenu
                  }
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={
                    pathname === "/products"
                      ? styles.activeMenu
                      : styles.inActiveMenu
                  }
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className={
                    pathname === "/news"
                      ? styles.activeMenu
                      : styles.inActiveMenu
                  }
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={
                    pathname === "/contact"
                      ? styles.activeMenu
                      : styles.inActiveMenu
                  }
                >
                  Contact Us
                </Link>
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
        <Button
          variant="text"
          className={styles.subMenuButton}
          onClick={handleClick("bottom")}
        >
          Power
        </Button>
        <Button
          variant="text"
          className={styles.subMenuButton}
          onClick={handleClick("bottom")}
        >
          City Cleaning
        </Button>
        <Button
          variant="text"
          className={styles.subMenuButton}
          onClick={handleClick("bottom")}
        >
          Maintenance & Construction
        </Button>
      </div>
      <Popper
        // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={styles.popupButtons}>
              <Button variant="text" className={styles.subMenuPopupButton}>
                Diesel Generator
              </Button>
              <Button variant="text" className={styles.subMenuPopupButton}>
                Stationary Screw Compressor
              </Button>
              <Button variant="text" className={styles.subMenuPopupButton}>
                Portable Screw Compressor
              </Button>
            </div>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default Header;
