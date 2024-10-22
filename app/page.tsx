"use client";
import Image from "next/image";
import Navbar from "./components/navbar/NavBar";

import fullPageBgr from "./images/background.png";
import xIcon from "./images/X-icon.png";
import telegramIcon from "./images/telegram-icon.png";

import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import styles from "./homepage.module.scss";
import HowToBuySection from "./components/HowToBuySection/HowToBuySection";
import TokenomicsSection from "./components/TokenomicsSection/TokenomicsSection";
import { scrollToSection } from "./utils";

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

        <section className={styles.heroSection} id="hero">
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
          <button
            className={styles.learnMoreBtn}
            onClick={scrollToSection("aboutUs", -150)}
          >
            <p>learn more</p>
          </button>
        </section>

        <AboutUsSection />
        <HowToBuySection />
        <TokenomicsSection />

        <section id="social" className={styles.socialSection}>
          <p className={styles.socialTitle}>our social</p>
          <div className="flex flex-row justify-center items-center">
            {/* <Image
              src={xIcon}
              alt="tokenomics-bubble-2"
              quality={100}
            />
            <Image
              src={telegramIcon}
              alt="tokenomics-bubble-2"
              quality={100}
            /> */}
          </div>
        </section>
      </div>
    </>
  );
}
