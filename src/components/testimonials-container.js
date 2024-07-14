import * as React from "react";
import PropTypes from "prop-types";
import * as styles from "./testimonials-container.module.css";

const TestimonialsContainer = ({ className = "" }) => {
  return (
    <div className={[styles.testimonialsSection, className].join(" ")}>
      <div className={styles.subheading}>Testimonials</div>
      <b className={styles.heading}>
        <p className={styles.whatPeopleSay}>What people say</p>
        <p className={styles.whatPeopleSay}>about Us.</p>
      </b>
      <img
        className={styles.testimonialsSectionChild}
        alt=""
        src="/group-61.svg"
      />
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.onTheWindows}>
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </div>
          <div className={styles.chrisThomas}>Chris Thomas</div>
          <div className={styles.ceoOfRed}>CEO of Red Button</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.testimonail}>
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </div>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <div className={styles.mikeTaylor}>Mike taylor</div>
          <div className={styles.lahorePakistan}>Lahore, Pakistan</div>
        </div>
        <img className={styles.paginationIcon} alt="" src="/pagination.svg" />
      </div>
    </div>
  );
};

TestimonialsContainer.propTypes = {
  className: PropTypes.string,
};

export default TestimonialsContainer;
