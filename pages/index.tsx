import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="http://livethelife.tv/">LIVETHELIFETV</a>
        </h1>
        <p className={styles.description}>
        LTL Art Collective
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.grid}>
          <a href="https://livethelife.tv/about/" className={styles.card}>
            <h2>LTL Art Collective &rarr;</h2>
            <p>
            We love photography and photogrammetry. Bluntly and deeply. This very pole enables us to build and propel the future of meta, digital, and traditional media.
            </p>
          </a>

          <a href="https://livethelife.tv/fmp-faq/" className={styles.card}>
            <h2>Founder Mint Pass &rarr;</h2>
            <p>
            LTL is an on-chain auction platform dedicated to exceptional photography. Discover and bid on exclusive drops, curated by Florence. The inaugural sale is a highly curated auction of 10 new NFT collections by celebrated photographers, created & minted specifically to launch LiveTheLifeTV.
            </p>
          </a>

          <a
            href="https://livethelife.tv/dda-collection/"
            className={styles.card}
          >
            <h2>Genesis Collection &rarr;</h2>
            <p>
            For over a decade, the award-winning photographer Dimitri Daniloff has been among the top 10 advertising photographers in the world. Around the Millenium, Dimitri Daniloff pioneered the switch from analog to digital. Some of the brands that bought his work are Absolut Vodka, Air France, Audi, Carlsberg, Land Rover, LG, Longchamp, Nike, and Sony Playstation.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
