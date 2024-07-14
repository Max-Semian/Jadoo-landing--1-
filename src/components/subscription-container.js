import * as React from "react";
import PropTypes from "prop-types";
import * as styles from "./subscription-container.module.css";

const SubscriptionContainer = ({ className = "" }) => {
  return (
    <div className={[styles.subscribeSection, className].join(" ")}>
      <div className={styles.parent1}>
        <div className={styles.div}>+</div>
        <div className={styles.div1}>+</div>
        <div className={styles.div2}>+</div>
        <div className={styles.div3}>+</div>
        <div className={styles.div4}>+</div>
        <div className={styles.div5}>+</div>
        <div className={styles.div6}>+</div>
        <div className={styles.div7}>+</div>
        <div className={styles.div8}>+</div>
        <div className={styles.div9}>+</div>
        <div className={styles.div10}>+</div>
        <div className={styles.div11}>+</div>
        <div className={styles.div12}>+</div>
        <div className={styles.div13}>+</div>
        <div className={styles.div14}>+</div>
        <div className={styles.div15}>+</div>
        <div className={styles.div16}>+</div>
      </div>
      <img
        className={styles.subscribeSectionChild}
        alt=""
        src="/group-78@2x.png"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.yourEmail}>Your email</div>
        <div className={styles.vectorParent}>
          <img className={styles.groupItem} alt="" src="/vector-5.svg" />
          <div className={styles.groupInner} />
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.subscribe}>Subscribe</div>
      </div>
      <div className={styles.subscribeToGetContainer}>
        <p className={styles.subscribeToGet}>
          Subscribe to get information, latest news and other
        </p>
        <p className={styles.subscribeToGet}>interesting offers about Jadoo</p>
      </div>
      <img className={styles.subscribeSectionItem} alt="" src="/group-77.svg" />
    </div>
  );
};

SubscriptionContainer.propTypes = {
  className: PropTypes.string,
};

export default SubscriptionContainer;
