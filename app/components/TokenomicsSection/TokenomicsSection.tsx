"use client";
import Image from "next/image";

import topBubble from "../../images/tokenomics-bubble-1.png";
import centerBubble from "../../images/tokenomics-bubble-2.png";
import bottomBubble from "../../images/tokenomics-bubble-3.png";

import styles from "./TokenomicsSection.module.scss";
import classNames from "classnames";

export default function TokenomicsSection() {
  return (
    <section className={styles.root} id="tokenomics">
      <p className={`textBlackBorder ${styles.title}`}>tokenomics</p>

      <div className={styles.bubbleTop}>
        <div className="relative">
          <Image
            src={topBubble}
            alt="tokenomics-bubble-1"
            quality={100}
          />
          <p className={classNames(styles.textInBubble, styles.textTop)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
            tristique eros.
          </p>
        </div>
      </div>

      <div className={styles.bubbleCenter}>
        <div className="relative">
          <Image
            src={centerBubble}
            alt="tokenomics-bubble-2"
            quality={100}
          />
          <p className={classNames(styles.textInBubble, styles.textCenter)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
            tristique eros.
          </p>
        </div>
      </div>

      <div className={styles.bubbleBottom}>
        <div className="relative">
          <Image
            src={bottomBubble}
            alt="tokenomics-bubble-3"
            quality={100}
          />
          <p className={classNames(styles.textInBubble, styles.textBottom)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
            tristique eros. Nunc a augue vel ipsum.
          </p>
        </div>
      </div>
    </section>
  );
}
