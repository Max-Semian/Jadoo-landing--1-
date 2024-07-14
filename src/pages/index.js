import * as React from "react";
import Footer from "../components/footer";
import SubscriptionContainer from "../components/subscription-container";
import FormContainer1 from "../components/form-container1";
import TestimonialsContainer from "../components/testimonials-container";
import Review from "../components/review";
import FormContainer from "../components/form-container";
import DestinationsContainer from "../components/destinations-container";
import ServicesContainer from "../components/services-container";
import Hero from "../components/hero";
import * as styles from "./index.module.css";

const TravelAgencyLandingPageUI = () => {
  return (
    <div className={styles.travelAgencyLandingPageUi}>
      <Footer />
      <SubscriptionContainer />
      <FormContainer1 />
      <TestimonialsContainer />
      <div className={styles.bookATrip}>
        <b className={styles.heading}>
          <p className={styles.bookYourNext}>{`Book your next trip `}</p>
          <p className={styles.bookYourNext}>in 3 easy steps</p>
        </b>
        <div className={styles.image}>
          <img className={styles.imageChild} alt="" src="/group-589.svg" />
          <Review />
        </div>
        <div className={styles.subheading}>Easy and Fast</div>
        <FormContainer />
      </div>
      <DestinationsContainer />
      <ServicesContainer />
      <Hero />
    </div>
  );
};

export default TravelAgencyLandingPageUI;
