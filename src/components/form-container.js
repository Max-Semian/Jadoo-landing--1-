import * as React from "react";
import PropTypes from "prop-types";
import * as styles from "./form-container.module.css";

const FormContainer = ({ className = "" }) => {
  return (
    <div className={[styles.values, className].join(" ")}>
      <div className={styles.value}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img
            className={styles.selection1Icon}
            alt=""
            src="/selection-1@2x.png"
          />
        </div>
        <b className={styles.chooseDestination}>Choose Destination</b>
        <div className={styles.loremIpsumDolorContainer}>
          <p
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur `}</p>
          <p
            className={styles.loremIpsumDolor}
          >{`adipiscing elit. Urna, tortor tempus. `}</p>
        </div>
      </div>
      <div className={styles.value1}>
        <img className={styles.rectangleParent} alt="" src="/group-11.svg" />
        <div className={styles.loremIpsumDolorContainer1}>
          <p
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur `}</p>
          <p
            className={styles.loremIpsumDolor}
          >{`adipiscing elit. Urna, tortor tempus. `}</p>
        </div>
        <b className={styles.chooseDestination}>
          Reach Airport on Selected Date
        </b>
      </div>
      <div className={styles.value2}>
        <div className={styles.loremIpsumDolorContainer}>
          <p
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur `}</p>
          <p
            className={styles.loremIpsumDolor}
          >{`adipiscing elit. Urna, tortor tempus. `}</p>
        </div>
        <b className={styles.chooseDestination}>Make Payment</b>
        <img className={styles.rectangleParent} alt="" src="/group-12.svg" />
      </div>
    </div>
  );
};

FormContainer.propTypes = {
  className: PropTypes.string,
};

export default FormContainer;
