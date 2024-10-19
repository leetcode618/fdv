"use client";
import Image from "next/image";
import Navbar from "./components/navbar/NavBar";

import { useEffect, useState } from "react";
import fullPageBgr from "./images/background.png";

import styles from "./homepage.module.scss";

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
      </div>
    </>
  );
}
