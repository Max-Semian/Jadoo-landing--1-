import * as React from "react";
import Trip from "./trip";
import PropTypes from "prop-types";
import * as styles from "./destinations-container.module.css";

const DestinationsContainer = ({ className = "" }) => {
  return (
    <div className={[styles.destinations, className].join(" ")}>
      <img className={styles.decoreIcon} alt="" src="/decore.svg" />
      <div className={styles.destination}>
        <Trip rectangle14="/rectangle-14@2x.png" />
        <div className={styles.card5}>
          <div className={styles.card5Child} />
          <div className={styles.fullEurope}>Full Europe</div>
          <img
            className={styles.navigation1Icon}
            alt=""
            src="/navigation-1.svg"
          />
          <div className={styles.daysTrip}>28 Days Trip</div>
          <div className={styles.k}>$15k</div>
        </div>
      </div>
      <div className={styles.destination1}>
        <Trip rectangle14="/rectangle-141@2x.png" />
        <div className={styles.card5}>
          <div className={styles.card5Child} />
          <div className={styles.romeItalty}>Rome, Italty</div>
          <img
            className={styles.navigation1Icon}
            alt=""
            src="/navigation-1.svg"
          />
          <div className={styles.daysTrip1}>10 Days Trip</div>
          <div className={styles.k1}>$5,42k</div>
        </div>
      </div>
      <div className={styles.destination2}>
        <Trip rectangle14="/rectangle-142@2x.png" />
        <div className={styles.card5}>
          <div className={styles.card5Child} />
          <div className={styles.romeItalty}>London, UK</div>
          <img
            className={styles.navigation1Icon}
            alt=""
            src="/navigation-1.svg"
          />
          <div className={styles.daysTrip2}>12 Days Trip</div>
          <div className={styles.k2}>$4.2k</div>
        </div>
      </div>
      <div className={styles.subheading}>Top Selling</div>
      <b className={styles.heading}>Top Destinations</b>
    </div>
  );
};

DestinationsContainer.propTypes = {
  className: PropTypes.string,
};

export default DestinationsContainer;
