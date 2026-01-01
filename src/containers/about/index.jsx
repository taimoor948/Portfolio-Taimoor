import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { SiMongodb, SiPostgresql, SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiPython, SiDocker } from "react-icons/si";

const personalDetails = [
  { label: "Name", value: "Taimoor Habib" },
  { label: "Location", value: "Karachi, Pakistan" },
  { label: "Email", value: "taimoorhabib948@gmail.com" },
  { label: "Phone", value: "+92-3042872301" },
  { label: "LinkedIn", value: "TaimoorHabib" },
];

const jobSummary =
  "A highly motivated Full-Stack Developer specializing in MERN and Next.js. Experienced in building secure, collaborative web applications with modern frameworks and real-time features. Proven track record in developing government portals, healthcare management systems, and research workflow platforms. Currently pursuing B.E. in Computer Systems Engineering at NED University with hands-on experience at National Center of Cyber Security (NCCS), Ztuth, and Orange Pro AI.";

const techStack = [
  { icon: SiReact, name: "React.js", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
];

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__left">
          <Animate
            play
            duration={1}
            delay={0.3}
            start={{ opacity: 0, transform: "translateY(50px)" }}
            end={{ opacity: 1, transform: "translateY(0)" }}
          >
            <div className="about__card">
              <h3 className="about__card__title">Full-Stack Developer</h3>
              <p className="about__card__text">{jobSummary}</p>
            </div>
          </Animate>

          <Animate
            play
            duration={1}
            delay={0.5}
            start={{ opacity: 0, transform: "translateY(50px)" }}
            end={{ opacity: 1, transform: "translateY(0)" }}
          >
            <div className="about__card">
              <h3 className="about__card__title">Personal Information</h3>
              <ul className="about__card__list">
                {personalDetails.map((item, i) => (
                  <li key={i}>
                    <span className="label">{item.label}:</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Animate>
        </div>

        <div className="about__content__right">
          <Animate
            play
            duration={1}
            delay={0.7}
            start={{ opacity: 0, transform: "translateY(50px)" }}
            end={{ opacity: 1, transform: "translateY(0)" }}
          >
            <div className="about__tech">
              <h3 className="about__tech__title">Tech Stack</h3>
              <div className="about__tech__grid">
                {techStack.map((tech, i) => (
                  <div key={i} className="tech-item">
                    <tech.icon size={40} style={{ color: tech.color }} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
