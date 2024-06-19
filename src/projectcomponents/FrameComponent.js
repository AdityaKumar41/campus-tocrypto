import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.firstNewsletterWrapper, className].join(" ")}>
      <div className={styles.firstNewsletter}>
        <div className={styles.secondNewsletter}>
          <div className={styles.strongSubscribe}>
            Subscribe to our newsletter
          </div>
          <p className={styles.getASummaryContainer}>
            <span className={styles.getASummary}>
              Get a summary of what we’ve shipped during the last month,
            </span>
            <span className={styles.behindTheScenes}>
              behind the scenes updates, and team picks.
            </span>
          </p>
        </div>
        <div className={styles.thirdNewsletter}>
          <div className={styles.fourthNewsletter}>
            <div className={styles.fifthNewsletter}>
              <div className={styles.sixthNewsletter}>
                <div className={styles.seventhNewsletter}>
                  <div className={styles.formInput}>
                    <input
                      className={styles.chrisswiftLangcom}
                      placeholder="chris@swift-lang.com"
                      type="text"
                    />
                  </div>
                </div>
                <button className={styles.formInput1}>
                  <div className={styles.subscribe}>Subscribe</div>
                </button>
              </div>
            </div>
            <p className={styles.formByContainer}>
              <span className={styles.bySubmittingYour}>
                By submitting your email address, you agree to receive Raycast’s
                monthly
              </span>
              <span className={styles.newsletterForMore}>
                newsletter. For more information, please read our privacy
                policy. You can
              </span>
              <span className={styles.alwaysWithdrawYour}>
                always withdraw your consent.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
