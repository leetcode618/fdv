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
import Link from "next/link";

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
          <h1 className={`textWhiteBorder ${styles.pageTitle}`}>
            Hi!{" "}
            <span className={`textWhiteBorder ${styles.pageSubTitle}`}>
              I'm Freddie Da Vinci,
            </span>
          </h1>

          <p className="mt-4 text-2xl  font-chillax">
            but my friends call me FDV for short.
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

        <section id="social" className={styles.socialSection}>
          <p className={styles.socialTitle}>our social</p>
          <div className="flex flex-row justify-center items-center gap-x-2 xl:gap-x-9">
            <Link href="https://x.com" target="_blank">
              <Image
                src={xIcon}
                alt="tokenomics-bubble-2"
                quality={100}
                className={styles.icon}
              />
            </Link>

            <Link href="https://telegram.org" target="_blank">
              <Image
                src={telegramIcon}
                alt="tokenomics-bubble-2"
                quality={100}
                className={styles.icon}
              />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
