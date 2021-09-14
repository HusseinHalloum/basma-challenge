import React, { useState } from "react";

import "./Portfolio.css";
import Card from "../UI/Card";

import Portfolio1 from "../../assets/images/portfolio1.jpeg";
import Portfolio2 from "../../assets/images/portfolio2.jpeg";
import Portfolio3 from "../../assets/images/portfolio3.jpeg";
import Portfolio4 from "../../assets/images/portfolio4.jpeg";
import Portfolio5 from "../../assets/images/portfolio5.jpeg";
import Portfolio6 from "../../assets/images/portfolio6.jpeg";

const portfolioCategories = [
  {
    id: 1,
    name: "graphic",
  },
  {
    id: 2,
    name: "landing",
  },
  {
    id: 3,
    name: "Art Design",
  },
];
const portfolioItems = [
  {
    id: 1,
    categoryID: 1,
    image: Portfolio1,
  },
  {
    id: 2,
    categoryID: 1,
    image: Portfolio2,
  },
  {
    id: 3,
    categoryID: 2,
    image: Portfolio3,
  },
  {
    id: 4,
    categoryID: 2,
    image: Portfolio4,
  },
  {
    id: 5,
    categoryID: 3,
    image: Portfolio5,
  },
  {
    id: 6,
    categoryID: 3,
    image: Portfolio6,
  },
];

const Portfolio = () => {
  const [filteredData, setFilteredData] = useState(portfolioItems);
  const [isActive, setIsActive] = useState(0);
  const filterData = (catID) => {
    setIsActive(catID);
    let filteredData;
    if (catID == 0) {
      filteredData = [...portfolioItems];
    } else {
      filteredData = portfolioItems.filter((item) => item.categoryID == catID);
    }
    setFilteredData(filteredData);
  };
  return (
    <section className="about-section portfolio-section" id="portfolio">
      <div className="main-container">
        <div className="inner-container">
          <div className="title-section">
            <p className="purple-color uppercase">PORTFOLIO</p>
            <h3>
              See our <span className="text-with-stroke">amazing</span>
            </h3>
            <h3>
              <span className="text-with-stroke">portfolio</span> collection
            </h3>
          </div>
          <div className="categories-listing">
            <button
              className={
                isActive === 0
                  ? "is-active uppercase category white-color"
                  : "uppercase category white-color"
              }
              onClick={() => filterData(0)}
            >
              show all
            </button>
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                className={
                  isActive === category.id
                    ? "is-active uppercase category white-color"
                    : "uppercase category white-color"
                }
                onClick={() => filterData(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="portfolios-listing">
            {filteredData.map((item) => (
              <Card key={item.id} className="portfolio">
                <img src={item.image} alt="portfolio-image" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
