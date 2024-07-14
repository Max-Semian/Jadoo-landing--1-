import * as React from "react";
import { useCallback } from "react";
import PropTypes from "prop-types";
import * as styles from "./hero.module.css";

const Hero = ({ className = "" }) => {
  const onRectangleButtonClick = useCallback(() => {
    // Please sync "Preview" to the project
  }, []);

  return (
    <div className={[styles.hero, className].join(" ")}>
      <img className={styles.decoreIcon} alt="" src="/decore1.svg" />
      <div className={styles.topNav}>
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
        <div className={styles.navItem}>Bookings</div>
        <div className={styles.navItem1}>Flights</div>
        <div className={styles.navItem2}>Hotels</div>
        <div className={styles.navItem3}>Desitnations</div>
        <div className={styles.navItem4}>Login</div>
        <div className={styles.button}>
          <div className={styles.signUp}>Sign up</div>
          <div className={styles.buttonChild} />
        </div>
        <div className={styles.dropdown}>
          <div className={styles.en}>EN</div>
          <img className={styles.dropdownChild} alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.desc}>
          <div className={styles.cta}>
            <button className={styles.cta1}>
              <button
                className={styles.ctaChild}
                onClick={onRectangleButtonClick}
              />
              <div className={styles.findOutMore}>Find out more</div>
            </button>
            <button className={styles.playDemo}>
              <div className={styles.playDemo1}>Play Demo</div>
              <button className={styles.playButton}>
                <div className={styles.playButtonChild} />
                <img
                  className={styles.playButtonItem}
                  alt=""
                  src="/polygon-1.svg"
                />
              </button>
            </button>
          </div>
          <b className={styles.tagline}>Best Destinations around the world</b>
          <div className={styles.desc1}>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </div>
          <img className={styles.decoreIcon1} alt="" src="/decore2.svg" />
          <img className={styles.decoreIcon1} alt="" src="/decore2.svg" />
          <b className={styles.heading}>
            <p className={styles.travelEnjoy}>Travel, enjoy</p>
            <p className={styles.travelEnjoy}>and live a new</p>
            <p className={styles.travelEnjoy}>and full life</p>
          </b>
        </div>
        <img className={styles.imageIcon} alt="" src="/image.svg" />
      </div>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
