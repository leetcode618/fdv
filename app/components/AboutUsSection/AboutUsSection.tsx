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
      <div className={styles.aboutUsSpeech}>
        <div className="relative">
          <Image
            src={aboutUsBubble}
            alt="about-us-bubble"
            priority
            quality={100}
            className={styles.aboutUsBubble}
          />

          <p
            className={`pageDescription textInBubble ${classNames(
              styles.aboutUsDescription,
              styles.textInBubbleWrapper
            )}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
            tristique eros. Nunc a augue vel ipsum porttitor pellentesque a eget
            sapien. Ut eu turpis feugiat, porttitor magna tincidunt, viverra
            metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer id tristique eros. Nunc a augue vel ipsum porttitor
            pellentesque a eget sapien. Ut eu turpis feugiat, porttitor magna
            tincidunt, viverra metus.
          </p>
        </div>
      </div>

      <section className={styles.aboutUsMonitorScreenSection}>
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
            <p className={`pageDescription ${styles.aboutUsDescription}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              id tristique eros. Nunc a augue vel ipsum porttitor pellentesque a
              eget sapien. Ut eu turpis feugiat, porttitor magna tincidunt,
              viverra metus.
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
