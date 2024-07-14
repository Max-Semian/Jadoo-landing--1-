import * as React from "react";
import PropTypes from "prop-types";
import * as styles from "./footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <img className={styles.decoreIcon} alt="" src="/decore@2x.png" />
      <div className={styles.outbound}>
        <div className={styles.social}>
          <img className={styles.socialIcon} alt="" src="/social.svg" />
          <img className={styles.socialIcon1} alt="" src="/social1.svg" />
          <img className={styles.socialIcon2} alt="" src="/social2.svg" />
        </div>
        <div className={styles.discover}>
          <div className={styles.discoverOurApp}>Discover our app</div>
          <img
            className={styles.googlePlayIcon}
            alt=""
            src="/google-play.svg"
          />
          <img className={styles.playStoreIcon} alt="" src="/play-store.svg" />
        </div>
      </div>
      <div className={styles.companyDesc}>
        <div className={styles.jadoo}>Jadoo.</div>
        <div className={styles.bookYourTripContainer}>
          <p className={styles.bookYourTrip}>
            Book your trip in minute, get full
          </p>
          <p className={styles.bookYourTrip}>Control for much longer.</p>
        </div>
      </div>
      <div className={styles.navColumns}>
        <div className={styles.navRow}>
          <b className={styles.company}>Company</b>
          <div className={styles.about}>About</div>
          <div className={styles.careers}>Careers</div>
          <div className={styles.mobile}>Mobile</div>
        </div>
        <div className={styles.navRow1}>
          <b className={styles.contact}>Contact</b>
          <div className={styles.helpfaq}>Help/FAQ</div>
          <div className={styles.careers}>Press</div>
          <div className={styles.mobile}>Affilates</div>
        </div>
        <div className={styles.navRow2}>
          <b className={styles.company}>More</b>
          <div className={styles.about}>Airlinefees</div>
          <div className={styles.airline}>Airline</div>
          <div className={styles.lowFareTips}>Low fare tips</div>
        </div>
      </div>
      <div className={styles.copyrights}>All rights reserved@jadoo.co</div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
