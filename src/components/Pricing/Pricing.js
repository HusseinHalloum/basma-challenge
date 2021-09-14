import React from "react";

import PricingItem from "./PricingItem";
import "./Pricing.css";

const Pricing = () => {
  const pricingItems = [
    {
      id: 1,
      type: "Basic",
      price: "$15",
      features: [
        {
          id: 1,
          name: "Responsive",
          supported: true,
        },
        {
          id: 2,
          name: "Documentation",
          supported: true,
        },
        {
          id: 3,
          name: "Support",
          supported: false,
        },
        {
          id: 4,
          name: "Multimedia",
          supported: false,
        },
        {
          id:5,
          name: "Creative",
          supported: false,
        },
        {
          id: 6,
          name: "Modern",
          supported: false,
        },
        {
          id: 7,
          name: "Free Update",
          supported: false,
        },
      ],
    },
    {
      id: 2,
      type: "Standart",
      price: "$30",
      features: [
        {
          id: 1,
          name: "Responsive",
          supported: true,
        },
        {
          id: 2,
          name: "Documentation",
          supported: true,
        },
        {
          id: 3,
          name: "Support",
          supported: true,
        },
        {
          id: 4,
          name: "Multimedia",
          supported: true,
        },
        {
          id:5,
          name: "Creative",
          supported: false,
        },
        {
          id: 6,
          name: "Modern",
          supported: false,
        },
        {
          id: 7,
          name: "Free Update",
          supported: false,
        },
      ],
    },
    {
      id: 3,
      type: "Premium",
      price: "$50",
      features: [
        {
          id: 1,
          name: "Responsive",
          supported: true,
        },
        {
          id: 2,
          name: "Documentation",
          supported: true,
        },
        {
          id: 3,
          name: "Support",
          supported: true,
        },
        {
          id: 4,
          name: "Multimedia",
          supported: true,
        },
        {
          id:5,
          name: "Creative",
          supported: true,
        },
        {
          id: 6,
          name: "Modern",
          supported: true,
        },
        {
          id: 7,
          name: "Free Update",
          supported: true,
        },
      ],
    },
  ];
  return (
    <section className="about-section pricing-section" id="pricing">
      <div className="main-container">
        <div className="inner-container">
          <div className="title-section">
            <p className="purple-color uppercase">PRICING TABLE</p>
            <h3>Your plance, your choise</h3>
          </div>
          <div className="items-listing">
            {pricingItems.map((item) => (
              <PricingItem
                key={item.id}
                type={item.type}
                price={item.price}
                features={item.features}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
