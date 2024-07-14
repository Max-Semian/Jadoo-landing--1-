import * as React from "react";
import PropTypes from "prop-types";
import * as styles from "./form-container1.module.css";

const FormContainer1 = ({ className = "" }) => {
  return (
    <div className={[styles.logos, className].join(" ")}>
      <img className={styles.image27Icon} alt="" src="/image-27@2x.png" />
      <img className={styles.image28Icon} alt="" src="/image-28@2x.png" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
      </div>
      <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
      <img className={styles.image31Icon} alt="" src="/image-31@2x.png" />
    </div>
  );
};

FormContainer1.propTypes = {
  className: PropTypes.string,
};

export default FormContainer1;
