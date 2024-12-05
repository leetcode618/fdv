"use client";
import Image from "next/image";
import { useState } from "react";

import aboutUsMonitorScreen from "../../images/about-us.png";
import buyNowMeme from "../../images/buy-now-meme.png";

import styles from "./AboutUsSection.module.scss";

const CONTRACT_ADDRESS = "DAMpC91BA8JnaXCVTkACFb4js4dkLfrKr16e53fmpump";

export default function AboutUsSection() {
  const [showToast, setShowToast] = useState(false);
  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000); // Hide toast after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
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
              else.
              <br /> <br />
              FDV is different. I’m 100% non-VC-backed, and my mission is
              simple: start a paradigm shift that changes the game on how crypto
              has gone since the start. <br />
              <br />
              Every coin has a FDV. We are all FDV.
            </p>
          </div>
        </div>
      </section>

      <div className="cursor-pointer" onClick={handleCopyAddress}>
        <Image
          src={buyNowMeme}
          alt="buy-now-meme"
          priority
          quality={100}
          className={styles.buyNowMeme}
        />
      </div>
      {/* Simple Toast */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-up">
          CA copied to clipboard! 🎉
        </div>
      )}

      {/* Add these keyframes to your global CSS */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
