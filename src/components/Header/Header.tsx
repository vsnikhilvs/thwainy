"use client";

import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import styles from "./Header.module.scss";
import Link from "next/link";
import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    Fade,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Popper,
    PopperPlacementType,
    Toolbar,
    Typography,
    ClickAwayListener,
    Portal,
} from "@mui/material";
import React, { useEffect } from "react";
import { Menu } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const navItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Products", url: "/products" },
    // { name: "News", url: "/news" },
    { name: "Contact Us", url: "/contact" },
];

const Header = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    );
    const [open, setOpen] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState<PopperPlacementType>();
    const [container, setContainer] = React.useState<HTMLElement | undefined>(
        undefined
    );
    const [popperOptions, setPopperOptions] = React.useState<string[]>([]);
    const handleDrawerToggle = (e: any) => {
        if (
            e?.target?.textContent === "Power" ||
            e?.target?.textContent === "City Cleaning" ||
            e?.target?.textContent === "Maintenance"
        ) {
            return;
        } else setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <Image
                    src={Logo}
                    alt={"Logo"}
                    className={styles.logoDrawer}
                    onClick={() => router.push("/")}
                />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <Link
                                href={item.url}
                                className={
                                    pathname === item.url
                                        ? styles.activeMenu
                                        : styles.inActiveMenu
                                }
                            >
                                {item.name}
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
                <Divider />
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: "center" }}>
                        <span
                            className={
                                styles.inActiveMenu + " " + styles.secondButtons
                            }
                        >
                            {"Power"}
                        </span>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: "center" }}>
                        <span
                            className={
                                styles.inActiveMenu + " " + styles.secondButtons
                            }
                        >
                            {"City Cleaning"}
                        </span>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: "center" }}>
                        <span
                            className={
                                styles.inActiveMenu + " " + styles.secondButtons
                            }
                        >
                            {"Maintenance"}
                        </span>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
    const handleClick =
        (newPlacement: PopperPlacementType, options: string[]) =>
        (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
            setOpen((prev) => placement !== newPlacement || !prev);
            setPlacement(newPlacement);
            setPopperOptions(options);
        };

    const handleClickAway = () => {
        setOpen(false);
    };

    const handlePopperClick = (option: string) => {
        router.push({
            pathname: "/products",
            query: { currentTab: option },
        });
    };

    useEffect(() => {
        setContainer(window !== undefined ? window.document.body : undefined);
    }, []);

    useEffect(() => {
        const handleClick = (e: any) => {
          if(
            e.target?.innerText === 'Power' ||
            e.target?.innerText === 'City Cleaning' ||
            e.target?.innerText === 'Maintenance & Construction'
          ) {
            setOpen(true);
          } else if(
            e.target?.innerText !== 'Diesel Generator' ||
            e.target?.innerText !== 'Stationary Screw Compressor' ||
            e.target?.innerText !== 'Stationary Compactor' ||
            e.target?.innerText !== 'Scissor Lift' ||
            e.target?.innerText !== 'Gripper'
          ) {
            setOpen(false);
          }
        };
        window.addEventListener('click', handleClick);
        return () => {
          window.removeEventListener('click', handleClick);
        };
      }, []);

    return (
        <>
            <div className={styles.container}>
                <AppBar component="nav" position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                display: { xs: "block", sm: "block" },
                                paddingTop: "0.5rem",
                            }}
                        >
                            <Image
                                src={Logo}
                                alt={"Logo"}
                                className={styles.logo}
                                onClick={() => router.push("/")}
                            />
                        </Typography>
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                gap: "1rem",
                            }}
                        >
                            {navItems.map((item) => (
                                <Link
                                    href={item.url}
                                    className={
                                        pathname === item.url
                                            ? styles.activeMenu
                                            : styles.inActiveMenu
                                    }
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </Box>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: "none" } }}
                        >
                            <Menu />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <nav className={styles.navBar}>
                    <Drawer
                        anchor="right"
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: "block", md: "none" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: "50%",
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </div>
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                }}
            >
                <div className={styles.subContainer}>
                    <Button
                        variant="text"
                        className={styles.subMenuButton}
                        onClick={handleClick("bottom", [
                            "Diesel Generator",
                            "Stationary Screw Compressor",
                        ])}
                    >
                        Power
                    </Button>
                    <Button
                        variant="text"
                        className={styles.subMenuButton}
                        onClick={handleClick("bottom", [
                            "Stationary Compactor",
                        ])}
                    >
                        City Cleaning
                    </Button>
                    <Button
                        variant="text"
                        className={styles.subMenuButton}
                        onClick={handleClick("bottom", [
                            "Scissor Lift",
                            "Gripper",
                        ])}
                    >
                        Maintenance & Construction
                    </Button>
                </div>
            </Box>

            <Popper
                sx={{ zIndex: 1200 }}
                open={open}
                anchorEl={anchorEl}
                placement={placement}
                transition
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <div className={styles.popupButtons}>
                            {popperOptions.map((option) => (
                                <Button
                                    key={option}
                                    variant="text"
                                    className={styles.subMenuPopupButton}
                                    onClick={() => handlePopperClick(option)}
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>
                    </Fade>
                )}
            </Popper>
        </>
    );
};

export default Header;
