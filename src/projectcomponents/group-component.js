import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./group-component.module.css";
import { Link } from "react-router-dom";

const GroupComponent = ({
  className = "",
  divTestimonialsTestimonia,
  propAlignSelf,
  propPadding,
  propFlex,
  propMinWidth,
  propBackground,
  link,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propPadding, propFlex, propMinWidth]);

  const rectangleDivStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  return (
    <div
      className={[styles.testimonialContainerParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.testimonialContainer}>
        <img
          className={styles.divtestimonialsTestimonialIcon}
          alt=""
          src={divTestimonialsTestimonia}
        />
        {/* <div
          className={styles.testimonialContainerChild}
          style={rectangleDivStyle}
        /> */}
      </div>
      <div className={styles.linkAdd509a1cb6566ab41f07d1Wrapper}>
        <img
          className={styles.linkAdd509a1cb6566ab41f07d1}
          loading="lazy"
          alt=""
          src="/link--add509a1cb6566ab41f07d1e6f868f6fc880fdc616x14svg.svg"
        />
      </div>
      <Link to={link}>
        <div className={styles.link}>View Github</div>
      </Link>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  divTestimonialsTestimonia: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propBackground: PropTypes.any,
};

export default GroupComponent;
