import * as React from "react";
import PropTypes from "prop-types";
import * as styles from "./trip1.module.css";

const Trip1 = ({ className = "" }) => {
  return <div className={[styles.groupChild, className].join(" ")} />;
};

Trip1.propTypes = {
  className: PropTypes.string,
};

export default Trip1;
