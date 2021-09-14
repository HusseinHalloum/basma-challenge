import React from "react";

import Card from "../UI/Card";
import ButtonFilled from "../UI/ButtonFilled";

const PricingItem = (props) => {
  return (
    <Card className="items bg-gray">
      <h4 className="pricing-type">{props.type}</h4>
      <h4 className="pricing-price">{props.price}</h4>
      <div className="pricing-features">
        {props.features.map((feature) => (
          <p
            key={feature.id}
            className={feature.supported ? "supported" : "not-supported"}
          >
            {feature.name}
          </p>
        ))}
      </div>
      <ButtonFilled value='Get Started' />
    </Card>
  );
};

export default PricingItem;
