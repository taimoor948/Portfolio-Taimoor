import React from "react";
import PageHeaderContent from "../../components/PageHeaderContent";
import { FaProjectDiagram} from "react-icons/fa";
import ImageOne from "../../images/image1.jpeg";
import ImageTwo from "../../images/image2.jpeg";
import ImageThree from "../../images/image3.jpeg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Text-Artist Website",
    image: ImageOne,
    link: "https://taimoor948.github.io/Text-Artist./",
  },
  {
    id: 3,
    name: "PassKey  Website",
    link: "https://taimoor948.github.io/Passkey-Generator/",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Fiverr Projects",
    link: "https://www.fiverr.com/jhanzaibhabib",
    image: ImageThree,
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
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <img alt="dummy data" src={item.image} />
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => window.open(item.link, "_blank")}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
