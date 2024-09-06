import React from "react";
import '../App.css'

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Unlock inner peace and vitality through the transformative power of yoga.</p>
        </div>
        <div className="pricing-table">
          <div className="pricing-column">
            <h3>Yoga</h3>
            <p>Styles to suit you</p>
            <ul>
              <li>✔ Flexibility Training</li>
              <li>✔ Breathing Techniques</li>
              <li>🗙 Meditation Sessions</li>
              <li>🗙 Personalized Yoga Plans</li>
            </ul>
            <div className="price">1000₹ / month</div>
          </div>
          <div className="pricing-column">
            <h3>Meditation</h3>
            <p>Body, Mind & Soul</p>
            <ul>
              <li>✔ Guided Meditation Sessions</li>
              <li>✔ Mindfulness Practices</li>
              <li>🗙 Yoga Integration</li>
              <li>🗙 Spiritual Guidance</li>
            </ul>
            <div className="price">1200₹ / month</div>
          </div>
        </div>
      </div>
    </div>
  );
};
