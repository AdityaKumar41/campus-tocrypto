import PropTypes from "prop-types";
import styles from "./SocialLinks.module.css";
import { Link } from "react-router-dom";

const SocialLinks = ({ className = "" }) => {
  return (
    <div className={[styles.socialLinks, className].join(" ")}>
      <div className={styles.linkFollowUsOnTwitter}>
        <div className={styles.before} />
        <img
          className={styles.svgIcon}
          loading="lazy"
          alt=""
          src="/twitter.svg"
        />
        <div className={styles.heading5}>Stay up to date</div>
        <p className={styles.wedLoveToContainer}>
          <span className={styles.wedLoveToStayConnectedWi}>
            <span>
              We’d love to stay connected with you. If the feeling’s mutual,
            </span>
          </span>
          <span className={styles.followRaycastappOnTwitter}>
            <span>{`follow `}</span>
            <Link to={"https://x.com/campustocrypto"} target="_blank">
              <b className={styles.raycastapp}>@campustocrypto</b>
            </Link>
            <span className={styles.onTwitterFor}>
              {" "}
              on Twitter for the latest news and updates.
            </span>
          </span>
        </p>
      </div>
      <div className={styles.linkJoinOurCommunitySlac}>
        <div className={styles.before1} />
        <img
          className={styles.svgIcon1}
          loading="lazy"
          alt=""
          src="/instagram.svg"
        />
        <div className={styles.helpShapeTheProductParent}>
          <div className={styles.helpShapeThe}>Stay Connected</div>
          <p className={styles.lotsOfTheContainer}>
            <span className={styles.lotsOfThe}>
              Let's stay connected! Follow{" "}
              <Link to={"https://instagram.com/campustocrypto"} target="_blank">
                <b className={styles.raycastapp}>@campustocrypto</b>
              </Link>{" "}
              on Instagram
            </span>
            <span className={styles.slackCommunityTo}>
              We’d love to have you with us!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

SocialLinks.propTypes = {
  className: PropTypes.string,
};

export default SocialLinks;
