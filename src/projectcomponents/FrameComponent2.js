import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  const components = [
    {
      image: "/nftmarketplace.png",
      title: "NFT-Marketplace",
      body: "Enabling users to mint, buy, sell, and trade unique digital assets.",
    },
    {
      image: "/BlockStamp.png",
      title: "BlockStamp",
      body: "Blockchain-based attendance management system that ensures security/transparency/immutability.",
    },
    {
      image: "/D-Meet.png",
      title: "D-Meet",
      body: "D-MEET is a decentralized platform that stores meeting recordings on IPFS for secure/distributed storage.",
    },
    {
      image: "/EOD Payment.png",
      title: "EOD Payment",
      body: "Facilitating the payment of examination-on-demand (EOD) fees using cryptocurrency.",
    },
    {
      image: "/DAO.png",
      title: "DAO",
      body: "NFT holders can create and vote on proposals to use that ETH for purchasing other NFTs from an NFT marketplace",
    },
    {
      image: "/Customdex.png",
      title: "Custom DEx",
      body: "Enables users to trade cryptocurrencies directly from their wallets with automated liquidity provision.",
    },
  ];
  return (
    <section className={[styles.keepingEcosystemWrapper, className].join(" ")}>
      <div className={styles.keepingEcosystem}>
        <h1 className={styles.keepingOurEcosystemContainer}>
          <p className={styles.keepingOur}>Our Product</p>
          <p className={styles.ecosystemBeautiful}>Ecosystem</p>
        </h1>
        <div className={styles.ecosystemIconParent}>
          <div className={styles.ecosystemIcon} />
          <div className={styles.divecosystemItemM6U0Parent}>
            {components.map((element, index) => (
              <div key={index} className={styles.divecosystemItemM6U0}>
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src={element.image}
                />
                <b className={styles.heading4}>{element.title}</b>
                <p className={styles.enablingUsersTo}>{element.body}</p>
              </div>
            ))}

            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
