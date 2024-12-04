"use client";
import Image from "next/image";

import howToBuyBubble from "../../images/how-to-buy-bubble.png";

import styles from "./HowToBuySection.module.scss";

const HOW_TO_BUY_CONTENT = [
  {
    title: "Get a Wallet",
    description: `Download Phantom or your wallet of choice`,
    stepColor: "#F0B011",
  },
  {
    title: "Get some SOL",
    description: `You will need some SOL to buy $FDV.  You can buy some in the Phantom app, or deposit SOL to your wallet from your crypto exchange of choice.  Then, swap your SOL on a DEX like Raydium, or Jupiter to get your first bag.`,
    stepColor: "#F46023",
  },
  {
    title: "Buy $FDV!",
    description: `Connect your wallet, paste the token address above, and swap some SOL for your first bag of $FDV.`,
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
            <Image src={howToBuyBubble} alt="how-to-buy-bubble" quality={100} />

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
