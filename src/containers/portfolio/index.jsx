import React from "react";
import PageHeaderContent from "../../components/PageHeaderContent";
import { FaProjectDiagram, FaExternalLinkAlt } from "react-icons/fa";
import ImageOne from "../../images/image1.jpeg";
import ImageTwo from "../../images/image2.jpeg";
import ImageThree from "../../images/image3.jpeg";
import ImageFour from "../../images/image4.jpeg";
import ImageFive from "../../images/image5.jpeg";
import ImageSix from "../../images/image6.jpeg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 1,
    name: "Sindh Universities Portal",
    description: "Official government portal for Sindh universities & boards with QR verification, role-based access, and dynamic modules",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    image: ImageOne,
    link: "",
  },
  {
    id: 2,
    name: "Hospital Management System",
    description: "Complete healthcare solution for Fatima Trust Hospital with patient registration, billing, and pharmacy management",
    tech: ["Next.js", "TypeScript", "Prisma"],
    image: ImageTwo,
    link: "",
  },
  {
    id: 3,
    name: "Research Workflow Platform",
    description: "Centralized platform for university research with submissions, versioning, and compliance automation",
    tech: ["Next.js", "TypeScript", "Prisma"],
    image: ImageThree,
    link: "",
  },
  {
    id: 4,
    name: "4-Loop",
    description: "Enabled secure document editing and seamless team collaboration.",
    tech: ["Next.js", "Firebase", "Clerk","PostgreSQL"],
    image: ImageFour,
    link: "https://4-loop.vercel.app/",
  },
  {
    id: 5,
    name: "Taimoor's Books Ltd",
    description: " Fully responsive MERN stack website, Taimoor's Books Ltd",
    tech: ["JavaScript", "MERN", "MongoDB"],
    link: "https://www.linkedin.com/posts/taimoor-habib_antdesign-aos-fullstackdeveloper-activity-7176894997366009856-cZ6p?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIFftwB-Dr5sO7u6M55xVozC2C7L2xjKws",
    image: ImageFive,
  },
   {
    id: 6,
    name: "Google-Oauth Authentication using Passport.js",
    tech: ["JavaScript", "MERN", "MongoDB"],
    link: "https://www.linkedin.com/posts/taimoor-habib_%F0%9D%90%93%F0%9D%90%9A%F0%9D%90%A2%F0%9D%90%A6%F0%9D%90%A8%F0%9D%90%A8%F0%9D%90%AB%F0%9D%90%AC-%F0%9D%90%8C%F0%9D%90%AE%F0%9D%90%AC%F0%9D%90%A2%F0%9D%90%9C-%F0%9D%90%96%F0%9D%90%9E%F0%9D%90%9B%F0%9D%90%AC%F0%9D%90%A2%F0%9D%90%AD-activity-7227686366992629760-JEPY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIFftwB-Dr5sO7u6M55xVozC2C7L2xjKws",
    image: ImageSix,
  },
];

const Portfolio = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleHover(index) {
    setHoveredValue(index);
  }

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<FaProjectDiagram size={40} />}
      />
      <div className="portfolio__content">
        <div className="portfolio__content__cards">
          {portfolioData.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.id}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <img alt={item.name} src={item.image} />
              </div>
              <div className={`overlay ${index === hoveredValue ? 'active' : ''}`}>
                <div className="overlay__content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="tech-stack">
                    {item.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  {item.link && (
                    <button 
                      className="visit-btn"
                      onClick={() => window.open(item.link, "_blank")}
                    >
                      <FaExternalLinkAlt /> Visit Project
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
