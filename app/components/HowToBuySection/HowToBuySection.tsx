"use client";
import Image from "next/image";

import howToBuyBubble from "../../images/how-to-buy-bubble.png";

import styles from "./HowToBuySection.module.scss";

const HOW_TO_BUY_CONTENT = [
  {
    title: "dolor sit amet",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
            tristique eros. Nunc a augue vel ipsum porttitor pellentesque a eget
            sapien.`,
    stepColor: "#F0B011",
  },
  {
    title: "dolor sit amet",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
            tristique eros. Nunc a augue vel ipsum porttitor pellentesque a eget
            sapien.`,
    stepColor: "#F46023",
  },
  {
    title: "dolor sit amet",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
            tristique eros. Nunc a augue vel ipsum porttitor pellentesque a eget
            sapien.`,
    stepColor: "#275CFE",
  },
];

export default function HowToBuySection() {
  return (
    <section className={styles.root} id="howToBuy">
      <p className={`textBlackBorder ${styles.title}`}>how to buy</p>

      <div className={styles.stepWrapper}>
        {HOW_TO_BUY_CONTENT.map((item, index) => (
          <div className="relative" key={index}>
            <Image
              src={howToBuyBubble}
              alt="how-to-buy-bubble"
              quality={100}
            />

            <div className={styles.stepItem}>
              <p
                className={styles.stepTittle}
                style={{
                  color: item.stepColor,
                }}
              >
                0{index + 1}
              </p>
              <p className={styles.stepTittle}>{item.title}</p>
              <p className="textInBubble">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
