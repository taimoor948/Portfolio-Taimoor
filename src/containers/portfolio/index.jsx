import React, { useState } from "react";
import PageHeaderContent from "../../components/PageHeaderContent";
import { FaProjectDiagram, FaExternalLinkAlt } from "react-icons/fa";
import "./styles.scss";

// ── CMS-driven content ─────────────────────────────────────
// Project data lives in src/content/portfolio.json.
// Images are referenced as "/images/imageN.jpeg" in the JSON
// (Decap CMS uploads to src/images/ and prefixes with /images/).
// We use require() to pull each image through Webpack so the
// build works correctly for both local paths and CMS-managed ones.
import portfolioContent from "../../content/portfolio.json";

// Webpack image map: maps the /images/<file> CMS path back to the
// correct module so images are hashed and bundled at build time.
const imageModules = {
  "/images/image1.jpeg": require("../../images/image1.jpeg"),
  "/images/image2.jpeg": require("../../images/image2.jpeg"),
  "/images/image3.jpeg": require("../../images/image3.jpeg"),
  "/images/image4.jpeg": require("../../images/image4.jpeg"),
  "/images/image5.jpeg": require("../../images/image5.jpeg"),
  "/images/image6.jpeg": require("../../images/image6.jpeg"),
};

/**
 * Resolve an image path coming from the JSON file.
 * CMS paths look like "/images/foo.jpeg"; we map them to the
 * bundled module. If a path isn't found, fall back to the raw string
 * (useful for absolute URLs or new images uploaded via CMS).
 */
function resolveImage(imagePath) {
  if (!imagePath) return null;
  return imageModules[imagePath] || imagePath;
}

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
          {portfolioContent.projects.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.id}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <img alt={item.name} src={resolveImage(item.image)} />
              </div>
              <div className={`overlay ${index === hoveredValue ? "active" : ""}`}>
                <div className="overlay__content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="tech-stack">
                    {item.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
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
