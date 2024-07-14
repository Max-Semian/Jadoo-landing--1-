import * as React from "react";
import PropTypes from "prop-types";
import * as styles from "./trip.module.css";

const Trip = ({ className = "", rectangle14 }) => {
  return (
    <img
      className={[styles.destinationChild, className].join(" ")}
      alt=""
      src={rectangle14}
    />
  );
};

Trip.propTypes = {
  className: PropTypes.string,
  rectangle14: PropTypes.string,
};

export default Trip;
