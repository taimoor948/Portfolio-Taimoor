import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./styles.scss";

// ── CMS-driven content ─────────────────────────────────────
// Name, title, greeting and tagline come from about.json so the
// CMS admin can update the hero section without touching code.
import aboutContent from "../../content/about.json";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };
  
  const handleNavigateToPortfolio = () => {
    navigate("/portfolio");
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#4f46e5", "#7c3aed", "#ec4899", "#10b981", "#f59e0b"],
      },
      shape: {
        type: ["circle", "triangle", "polygon"],
        polygon: {
          sides: 6,
        },
      },
      opacity: {
        value: 0.4,
        random: true,
        animation: {
          enable: true,
          speed: 0.8,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 4 },
        random: true,
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 1,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 120,
        color: "#101012ff",
        opacity: 0.15,
        width: 2,
        triangles: {
          enable: true,
          color: "#f7eb16ff",
          opacity: 0.15,
        },
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce",
        },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      rotate: {
        value: 0,
        random: true,
        direction: "clockwise",
        animation: {
          enable: true,
          speed: 5,
          sync: false,
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: ["grab", "bubble"],
        },
        onClick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.8,
            color: "#ec4899",
          },
        },
        bubble: {
          distance: 250,
          size: 8,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <section id="home" className="home">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="home__particles"
      />
      
      <div className="home__content">
        <div className="home__text-wrapper">
          <Animate
            play
            duration={1}
            delay={0.2}
            start={{ opacity: 0, transform: "translateY(-50px)" }}
            end={{ opacity: 1, transform: "translateY(0)" }}
          >
            <h3 className="home__greeting">{aboutContent.greeting}</h3>
          </Animate>
          
          <Animate
            play
            duration={1}
            delay={0.4}
            start={{ opacity: 0, transform: "translateX(-50px)" }}
            end={{ opacity: 1, transform: "translateX(0)" }}
          >
            <h1 className="home__name">{aboutContent.name}</h1>
          </Animate>
          
          <Animate
            play
            duration={1}
            delay={0.6}
            start={{ opacity: 0, transform: "translateX(50px)" }}
            end={{ opacity: 1, transform: "translateX(0)" }}
          >
            <h2 className="home__title">
              <span className="gradient-text">{aboutContent.title}</span>
            </h2>
          </Animate>
          
          <Animate
            play
            duration={1}
            delay={0.8}
            start={{ opacity: 0, transform: "translateY(50px)" }}
            end={{ opacity: 1, transform: "translateY(0)" }}
          >
            <p className="home__description">
              {aboutContent.tagline}
            </p>
          </Animate>
        </div>

        <Animate
          play
          duration={1}
          delay={1}
          start={{ opacity: 0, transform: "translateY(50px)" }}
          end={{ opacity: 1, transform: "translateY(0)" }}
        >
          <div className="home__cta">
            <button className="btn btn-primary" onClick={handleNavigateToContactMePage}>
              Hire Me
            </button>
            <button className="btn btn-secondary" onClick={handleNavigateToPortfolio}>
              View Work
            </button>
            <a href="/Taimoor_Habib.pdf" download="Taimoor_Habib_Resume.pdf" className="btn btn-accent">
              <FaDownload /> Download Resume
            </a>
          </div>
        </Animate>

        <Animate
          play
          duration={1}
          delay={1.2}
          start={{ opacity: 0 }}
          end={{ opacity: 1 }}
        >
          <div className="home__social">
            <a href={aboutContent.socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub size={24} />
            </a>
            <a href={aboutContent.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin size={24} />
            </a>
          </div>
        </Animate>
      </div>
      
      <div className="home__bg-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </section>
  );
};
export default Home;
