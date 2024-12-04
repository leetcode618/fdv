"use client";
import Image from "next/image";

import aboutUsBubble from "../../images/about-us-bubble.png";
import aboutUsMonitorScreen from "../../images/about-us.png";
import buyNowMeme from "../../images/buy-now-meme.png";

import classNames from "classnames";
import styles from "./AboutUsSection.module.scss";

export default function AboutUsSection() {
  return (
    <>
      <section className={styles.aboutUsMonitorScreenSection} id="aboutUs">
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
            <p
              className={`pageDescription font-lilita ${styles.aboutUsDescription}`}
            >
              You’ve seen coins with sky-high fully diluted valuations, where
              VCs and early investors hold all the power, dumping on everyone
              else.  FDV is different. I’m 100% non-VC-backed, and my mission is
              simple: start a paradigm shift that changes the game on how crypto
              has gone since the start. Every coin has a FDV.  We are all FDV.
            </p>
          </div>
        </div>
      </section>

      <Image
        src={buyNowMeme}
        alt="buy-now-meme"
        priority
        quality={100}
        className={styles.buyNowMeme}
      />
    </>
  );
}
