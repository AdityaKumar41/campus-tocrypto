import React from "react";
import planet from "../../Assets/svg/81.svg";
import planet2 from "../../Assets/svg/82.svg";
import styles from "./Project.module.css";
import ExtensionsImage from "../../projectcomponents/ExtensionsImage";
import FrameComponent2 from "../../projectcomponents/FrameComponent2";
import SocialLinks from "../../projectcomponents/SocialLinks";
import ImageComponentes from "../../projectcomponents/imageComponentes";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.productCircle1}></div>
      <div className={styles.productCircle2}></div>
      <div className={styles.productCircle3}></div>

      <section className={styles.blockchainInner}>
        <div className={styles.frameParent}>
          <div className={styles.wrapperDivParent}>
            <div className={styles.buildTheProjectToolsWrapper}>
              <h1 className={styles.buildTheProjectContainer}>
                <span>
                  <p className={styles.buildThe}>Build By Our</p>
                  <p className={styles.projectTools}>Community</p>
                </span>
              </h1>
            </div>
            <p className={styles.turnOrdinaryToolsContainer}>
              <span className={styles.turnOrdinaryTools}>
                Transform Student Innovation with Blockchain:
              </span>
              <span className={styles.andSpeedUp}>
                Simplify, Accelerate, and Empower with Campus to Crypto.
              </span>
            </p>
            <div className={styles.linkWrapper}>
              <Link
                to={"https://www.github.com/campustocrypto"}
                target="_blank"
              >
                <button className={styles.link}>
                  <div className={styles.linkPaints} />
                  <div className={styles.visitGithubParent}>
                    <div className={styles.visitGithub}>Visit Github</div>
                    <div className={styles.beforeParent}>
                      <div className={styles.before} />
                      <img
                        className={styles.add509a1cb6566ab41f07d1e6f868fIcon}
                        alt=""
                        src="/githubhead.svg"
                      />
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ExtensionsImage />
      <FrameComponent2 />
      <ImageComponentes />
      <section className={styles.firstFooterWrapper}>
        <div className={styles.firstFooter}>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
};

export default Product;
