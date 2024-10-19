"use client";
import Image from "next/image";
import Navbar from "./components/navbar/NavBar";

import { useEffect, useState } from "react";
import fullPageBgr from "./images/background.png";
import aboutUsMonitorScreen from "./images/about-us.png";

import styles from "./homepage.module.scss";
import classNames from "classnames";

const MOBILE_BREAKPOINT = 540;

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative">
        <Image
          src={fullPageBgr}
          alt="full-page-background"
          priority
          quality={100}
          style={{
            width: "100%",
          }}
        />

        <section className={styles.heroSection}>
          <h1 className={`textWhiteBorder ${styles.pageTitle}`}>Lorem ipsum</h1>
          <h3 className={`textWhiteBorder ${styles.pageSubTitle}`}>
            dolor sit amet
          </h3>
          <p className={styles.pageDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
            tristique eros. Nunc a augue vel ipsum porttitor pellentesque a eget
            sapien. Ut eu turpis feugiat, porttitor magna tincidunt, viverra
            metus.
          </p>
          <button className={styles.learnMoreBtn}>
            <p>learn more</p>
          </button>
        </section>

        <section className={styles.aboutUsSection}>
          <div className="relative">
            <Image
              src={aboutUsMonitorScreen}
              alt="about-us-monitor"
              priority
              quality={100}
              className={styles.aboutUsScreen}
            />
            <div className="absolute top-0 left-0 p-1 xxs:p-2 sm:p-5 text-[7px]">
              <p className={`textBlackBorder ${styles.aboutUsTitle}`}>about us</p>
              <p className={classNames(styles.pageDescription, styles.aboutUsDescription)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                id tristique eros. Nunc a augue vel ipsum porttitor pellentesque
                a eget sapien. Ut eu turpis feugiat, porttitor magna tincidunt,
                viverra metus.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
