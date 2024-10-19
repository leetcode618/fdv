"use client";
import Image from "next/image";
import Navbar from "./components/navbar/NavBar";

import fullPageBgr from "./images/background.png";

import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import styles from "./homepage.module.scss";
import HowToBuySection from "./components/HowToBuySection/HowToBuySection";
import TokenomicsSection from "./components/TokenomicsSection/TokenomicsSection";

export default function Home() {
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
          <p className="pageDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
            tristique eros. Nunc a augue vel ipsum porttitor pellentesque a eget
            sapien. Ut eu turpis feugiat, porttitor magna tincidunt, viverra
            metus.
          </p>
          <button className={styles.learnMoreBtn}>
            <p>learn more</p>
          </button>
        </section>

        <AboutUsSection />
        <HowToBuySection />
        <TokenomicsSection />
      </div>
    </>
  );
}
