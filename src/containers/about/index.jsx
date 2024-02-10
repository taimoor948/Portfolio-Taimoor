import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiDatabase, DiBootstrap, DiCodeBadge } from "react-icons/di";
import { FaReact } from "react-icons/fa";

// Now you can use these icons in your component

const personelDetails = [
  {
    label: "Name",
    value: "Taimoor Habib",
  },
  {
    label: "Father's Name",
    value: "Habib-ur-Rehman",
  },
  {
    label: "Address",
    value: "Karachi,Pakistan",
  },
  {
    label: "Email",
    value: "taimoorhabib948@gmail.com",
  },
  {
    label: "Contact No",
    value: "+92 3042872301",
  },
];

const jobSummary =
  "Upcoming Computer Information Systems graduate with a strong programming foundation. Currently interning at NCL-NED, specializing in React.js, web development, and UI/UX design. Two years of graphic design freelancing on Fiverr. Pursuing a degree in Computer System Engineering at NED University, proficient in Microsoft Office, Python, C Language, React.js, and MERN stack. Diverse project experience includes a React.js website and a Python-based City Banking System. Eager to contribute to innovative projects and passionate about classical music and poetry in leisure.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personelWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Web Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personelDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaReact size={60} color="var(--portfolio-main-color)" />
              </div>
              <div>
                <DiCodeBadge size={60} color="var(--portfolio-main-color)" />
              </div>
              <div>
                <DiDatabase size={60} color="var(--portfolio-main-color)" />
              </div>
              <div>
                <DiBootstrap size={60} color="var(--portfolio-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
