import GroupComponent from "./group-component";
import PropTypes from "prop-types";
import styles from "./imageComponentes.module.css";
import { Link } from "react-router-dom";

const ImageComponentes = ({ className = "" }) => {
  const gridImage1 =
    "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/DAOimage.png";
  const gridImage2 =
    "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/D-MEETimage.png";

  const gridImage3 =
    "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/AccountAbstract1.png";
  const gridImage4 =
    "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/AccountAbstract.png";
  const gridImage5 =
    "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/NFT-MARKETPLACE.png";
  const gridImage6 =
    "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/EOD%20APPLICATION.png";

  const gridLink1 = "https://github.com/campustocrypto/DAO-Dapp";
  const gridLink2 = "https://github.com/campustocrypto/D-MEET";
  const gridLink3 = "https://github.com/campustocrypto/Account-Abstraction";
  const gridLink4 = "https://github.com/campustocrypto/NFT-Collection-DAPP";
  const gridLink5 = "https://github.com/campustocrypto/EodPaymentSystem";

  return (
    <section className={[styles.blockchainfinalInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.heading3YoureInGoodWrapper}>
              <h1 className={styles.heading3}>Our Project Resource</h1>
            </div>
            <div className={styles.itsStillEarlyContainer}>
              <p className={styles.itsStillEarly}>
                Unlock Powerful Blockchain Tools: Explore Our Project
              </p>
              <p className={styles.soYouKnow}>
                Resources and Elevate Your Crypto Journey.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <GroupComponent
                divTestimonialsTestimonia={gridImage1}
                link={gridLink1}
              />
              <GroupComponent
                divTestimonialsTestimonia={gridImage2}
                link={gridLink2}
                propAlignSelf="stretch"
                propPadding="11.375rem 1.687rem 1.812rem"
                propFlex="unset"
                propMinWidth="unset"
                propBackground="linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(221, 215, 215, 0.1) 20%, rgba(166, 161, 161, 0.2) 40%, rgba(132, 128, 128, 0.3) 60%, rgba(90, 86, 86, 0.4) 80%, rgba(0, 0, 0, 0.6))"
              />
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.divtestimonialsTestimonial}>
              <div className={styles.linkAdd509a1cb6566ab41f07d1Wrapper}>
                <img
                  className={styles.linkAdd509a1cb6566ab41f07d1}
                  loading="lazy"
                  alt=""
                  src="/link--add509a1cb6566ab41f07d1e6f868f6fc880fdc616x14svg.svg"
                />
              </div>
              <Link to={gridImage3}>
                <div className={styles.link}>View Github</div>
              </Link>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent2}>
              <div className={styles.frameWrapper2}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.divtestimonialsTestimonialParent}>
                    <img
                      className={styles.divtestimonialsTestimonialIcon}
                      alt=""
                      src={gridImage3}
                    />
                    <img
                      className={styles.linkAdd509a1cb6566ab41f07d11}
                      loading="lazy"
                      alt=""
                      src="/githubhead.svg"
                    />
                  </div>
                  <Link to={gridLink3}>
                    <div className={styles.link1}>View Github</div>
                  </Link>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <GroupComponent
                  divTestimonialsTestimonia={gridImage5}
                  link={gridLink4}
                  propAlignSelf="unset"
                  propPadding="11.375rem 1.687rem 1.812rem"
                  propFlex="0.7769"
                  propMinWidth="9.813rem"
                  propBackground="linear-gradient(180deg, rgba(217, 217, 217, 0), rgba(96, 92, 92, 0.1) 20%, rgba(74, 72, 72, 0.2) 40%, rgba(65, 62, 62, 0.3) 59.6%, rgba(55, 53, 53, 0.4) 80%, rgba(0, 0, 0, 0.6))"
                />
                <div className={styles.frameWrapper3}>
                  <GroupComponent
                    divTestimonialsTestimonia={gridImage6}
                    link={gridLink5}
                    propAlignSelf="stretch"
                    propPadding="11.375rem 1.687rem 1.812rem"
                    propFlex="unset"
                    propMinWidth="unset"
                    propBackground="linear-gradient(180deg, rgba(217, 217, 217, 0), rgba(96, 92, 92, 0.1) 20%, rgba(74, 72, 72, 0.2) 40%, rgba(65, 62, 62, 0.3) 59.6%, rgba(55, 53, 53, 0.4) 80%, rgba(0, 0, 0, 0.6))"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper4}>
          <div className={styles.linkJoinTheCommunityParent}>
            <Link to={"/community"}>
              <div className={styles.linkJoin}>Join the community</div>
            </Link>

            <div className={styles.groupWrapper}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ImageComponentes.propTypes = {
  className: PropTypes.string,
};

export default ImageComponentes;
