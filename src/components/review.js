import * as React from "react";
import Trip1 from "./trip1";
import PropTypes from "prop-types";
import * as styles from "./review.module.css";

const Review = ({ className = "" }) => {
  return (
    <div className={[styles.image, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <Trip1 />
        <img className={styles.optionsIcon} alt="" src="/options.svg" />
        <img className={styles.building1Icon} alt="" src="/building-1@2x.png" />
        <div className={styles.peopleGoing}>24 people going</div>
        <div className={styles.june}>14-29 June</div>
        <div className={styles.byRobbinJoseph}>by Robbin joseph</div>
        <img className={styles.groupChild} alt="" src="/rectangle-17@2x.png" />
        <div className={styles.tripToGreece}>Trip To Greece</div>
        <div className={styles.groupItem} />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupInner} />
        <div className={styles.tripToRome}>Trip to rome</div>
        <div className={styles.completed}>
          <span>40%</span>
          <span className={styles.completed1}> completed</span>
        </div>
        <div className={styles.ellipseDiv} />
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
        <div className={styles.ongoing}>Ongoing</div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.groupChild1} />
        </div>
      </div>
      <img className={styles.heart61} alt="" src="/heart-6-1.svg" />
    </div>
  );
};

Review.propTypes = {
  className: PropTypes.string,
};

export default Review;
