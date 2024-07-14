import * as React from "react";
import PropTypes from "prop-types";
import * as styles from "./services-container.module.css";

const ServicesContainer = ({ className = "" }) => {
  return (
    <div className={[styles.services, className].join(" ")}>
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
        <div className={styles.div17}>+</div>
        <div className={styles.div18}>+</div>
        <div className={styles.div19}>+</div>
        <div className={styles.div20}>+</div>
        <div className={styles.div21}>+</div>
      </div>
      <div className={styles.category}>CATEGORY</div>
      <b className={styles.weOfferBest}>We Offer Best Services</b>
      <div className={styles.categoryActive}>
        <div className={styles.categoryActiveChild} />
        <div className={styles.categoryActiveItem} />
        <div className={styles.engrossedListeningPark}>
          Engrossed listening. Park gate sell they west hard for the.
        </div>
        <div className={styles.bestFlights}>Best Flights</div>
        <img
          className={styles.categoryActiveInner}
          alt=""
          src="/group-51.svg"
        />
      </div>
      <div className={styles.category1}>
        <img className={styles.categoryChild} alt="" src="/group-48.svg" />
        <div className={styles.builtWicketLonger}>
          Built Wicket longer admire do barton vanity itself do in it.
        </div>
        <div className={styles.calculatedWeather}>{`Calculated Weather `}</div>
      </div>
      <div className={styles.category2}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img className={styles.image25Icon} alt="" src="/image-25@2x.png" />
        </div>
        <div
          className={styles.bartonVanityItself}
        >{`Barton vanity itself do in it. Preferd to men it engrossed listening. `}</div>
        <div className={styles.localEvents}>Local Events</div>
      </div>
      <div className={styles.category3}>
        <img className={styles.categoryItem} alt="" src="/group-49.svg" />
        <div className={styles.weDeliverOutsourcedContainer}>
          <p className={styles.weDeliverOutsourced}>We deliver outsourced</p>
          <p className={styles.weDeliverOutsourced}>aviation services for</p>
          <p className={styles.weDeliverOutsourced}>military customers</p>
        </div>
        <div className={styles.customization}>Customization</div>
      </div>
    </div>
  );
};

ServicesContainer.propTypes = {
  className: PropTypes.string,
};

export default ServicesContainer;
