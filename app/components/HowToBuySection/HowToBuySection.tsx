"use client";
import Image from "next/image";
import Link from "next/link";
import howToBuyBubble from "../../images/how-to-buy-bubble.png";
import styles from "./HowToBuySection.module.scss";

const HOW_TO_BUY_CONTENT = [
  {
    title: "Get a Wallet",
    description: (
      <>
        Download{" "}
        <Link
          href="https://phantom.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F0B011] hover:underline"
        >
          Phantom
        </Link>{" "}
        or your wallet of choice
      </>
    ),
    stepColor: "#F0B011",
  },
  {
    title: "Get some SOL",
    description: (
      <>
        You will need some SOL to buy $FDV. You can buy some in the Phantom app,
        or deposit SOL to your wallet from your crypto exchange of choice. Then,
        swap your SOL on a DEX like{" "}
        <Link
          href="https://raydium.io/swap/?inputMint=sol&outputMint=DAMpC91BA8JnaXCVTkACFb4js4dkLfrKr16e53fmpump"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F46023] hover:underline"
        >
          Raydium
        </Link>
        , or{" "}
        <Link
          href="https://jup.ag/swap/SOL-DAMpC91BA8JnaXCVTkACFb4js4dkLfrKr16e53fmpump"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#275CFE] hover:underline"
        >
          Jupiter
        </Link>{" "}
        to get your first bag.
      </>
    ),
    stepColor: "#F46023",
  },
  {
    title: "Buy $FDV!",
    description: (
      <>
        Connect your wallet, paste the token address above, and swap some SOL
        for your first bag of $FDV.
      </>
    ),
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
              <div className="textInBubble mt-4">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
