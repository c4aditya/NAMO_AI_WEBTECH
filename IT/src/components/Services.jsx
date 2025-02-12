import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { MdSmartphone } from "react-icons/md";
import { FaBrain } from "react-icons/fa";


const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build fast, secure, and scalable web applications tailored to your business needs.",
    icon: <FaLaptopCode className="icon purple" />,
    bgColor: "purple-bg",
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Boost your online presence with data-driven marketing strategies and SEO techniques.",
    icon: <MdCampaign className="icon yellow" />,
    bgColor: "yellow-bg",
  },
  {
    id: 3,
    title: "Mobile Development",
    description:
      "Create high-performance mobile apps for Android and iOS with seamless user experiences.",
    icon: <MdSmartphone className="icon blue" />,
    bgColor: "blue-bg",
  },
  {
    id: 4,
    title: "AI Integration",
    description:
      "Enhance your apps with AI, automation, and machine learning to drive efficiency.",
    icon: <FaBrain className="icon pink" />,
    bgColor: "pink-bg",
  },
];

const Services = () => {
  return (
    <>
   
    <div className="main-services-container">
    {/* <div className="desing-develop-deploy">
      <ul>
        <li>Design </li>
        <li>Develop</li>
        <li>Deploy</li>
      </ul>
    </div> */}
    <div className="services-container">
      {services.map((service) => (
        <div key={service.id} className={`service-card ${service.bgColor}`}>
          <div className="icon-container">{service.icon}</div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default Services;
