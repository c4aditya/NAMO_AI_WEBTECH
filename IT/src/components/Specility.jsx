import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { BiData } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import "./Spec.css";

const Specility = () => {
  const cardData = [
    {
      icon: <FaLaptopCode className="icon" />,
      title: "Custom Approach",
      description: "We solve real business problems with custom-tailored tech solutions.",
      bgColor: "#EADDFE",
    },
    {
      icon: <BiData className="icon" />,
      title: "Data-driven Development",
      description: "We create tech products that are data-driven and market-conscious.",
      bgColor: "#FFF3C6",
    },
    {
      icon: <FaDatabase className="icon" />,
      title: "Cutting-edge Tech",
      description: "Every project at Think To Share is an opportunity for us to chase innovation.",
      bgColor: "#D9D8FE",
    },
    {
      icon: <FaRocket className="icon" />,
      title: "Scalable Solutions",
      description: "Our business solutions never stand in the way of your business growth.",
      bgColor: "#FEE3E3",
    },
  ];

  return (
    <div className="main-card">
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div key={index} className="card" style={{ backgroundColor: card.bgColor }}>
          {card.icon}
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Specility ;
