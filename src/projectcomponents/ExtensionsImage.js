import PropTypes from "prop-types";
import styles from "./ExtensionsImage.module.css";
import { Link } from "react-router-dom";

const ExtensionsImage = ({ className = "" }) => {
  const headingImage1 =
    "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/projectImg1.png";
  const headingImage2 =
    "https://campustocrypto.s3.ap-south-1.amazonaws.com/source/projectImg2.png";
  return (
    <div className={styles.MainContainer}>
      <section className={[styles.extensionsImage, className].join(" ")}>
        <div className={styles.divdevelopersExtensionsIqn1}>
          <img
            className={styles.imageIcon1}
            loading="lazy"
            alt=""
            src={headingImage1}
          />
          <div className={styles.divdevelopersExtensionsIqnInner}>
            <div className={styles.heading3ExtensionsParent}>
              <b className={styles.heading31}>
                {" "}
                Account Abstracted multi-signature wallet
              </b>
              <div className={styles.empowerStudentsByProvidingParent}>
                <p className={styles.empowerStudentsBy}>
                  Account-Abstracted wallet with multiple signers can make our
                  wallet quantum resistent and hence providing greater security
                  than that of what our usual wallets like Metamask provide. By
                  shifting wallets from EOA’s to Smart contract
                  accounts(ERC-4337).
                </p>
                <button className={styles.link1}>
                  <Link
                    to={"https://github.com/campustocrypto/Account-Abstraction"}
                    target="_blank"
                  >
                    <div className={styles.view1}>View</div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divdevelopersExtensionsIqn1}>
          <img
            className={styles.imageIcon1}
            loading="lazy"
            alt=""
            src={headingImage2}
          />
          <div className={styles.divdevelopersExtensionsIqnInner}>
            <div className={styles.heading3ExtensionsParent}>
              <b className={styles.heading31}>Blockcation</b>
              <div className={styles.empowerStudentsByProvidingParent}>
                <p className={styles.empowerStudentsBy}>
                  Empower students by providing them with a platform to securely
                  store files using decentralized storage through IPFS
                  (InterPlanetary File System). The project aims to address the
                  challenges students face in securely storing and accessing
                  their academic documents and file.
                </p>
                <button className={styles.link1}>
                  <Link
                    to={"https://github.com/campustocrypto/Blockation.git"}
                    target="_blank"
                  >
                    <div className={styles.view1}>View</div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ExtensionsImage.propTypes = {
  className: PropTypes.string,
};

export default ExtensionsImage;
