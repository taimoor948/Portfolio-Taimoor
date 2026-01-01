import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import PageHeaderContent from "../../components/PageHeaderContent";
import './styles.scss';
import { Animate } from "react-simple-animate";

const contactData = [
  {
    icon: FaPhone,
    label: "Phone",
    value: "+92-3042872301",
    link: "tel:+923042872301",
    color: "#10b981"
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "taimoorhabib948@gmail.com",
    link: "mailto:taimoorhabib948@gmail.com",
    color: "#ec4899"
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Message Me",
    link: "https://wa.me/923042872301",
    color: "#25D366"
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "TaimoorHabib",
    link: "https://www.linkedin.com/in/taimoor-habib-a50b5026a/",
    color: "#0077B5"
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@taimoorhabib",
    link: "https://github.com/taimoor948",
    color: "#ffffff"
  },
  {
    icon: FaGlobe,
    label: "Website",
    value: "Portfolio",
    link: "https://taimoorhabib.com",
    color: "#6366f1"
  },
];

const Contact = () => {
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Get In Touch"
        icon={<FaPhone size={40} />}
      />
      
      <div className="contact__content">
        <Animate
          play
          duration={0.8}
          delay={0.2}
          start={{ opacity: 0, transform: "translateY(50px)" }}
          end={{ opacity: 1, transform: "translateY(0)" }}
        >
          <div className="contact__intro">
            <h2>Let's Work Together</h2>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>
        </Animate>

        <div className="contact__cards">
          {contactData.map((item, index) => (
            <Animate
              key={index}
              play
              duration={0.5}
              delay={0.3 + index * 0.1}
              start={{ opacity: 0, transform: "translateY(30px)" }}
              end={{ opacity: 1, transform: "translateY(0)" }}
            >
              <div 
                className="contact__card"
                onClick={() => openLink(item.link)}
              >
                <div className="contact__card__icon" style={{ color: item.color }}>
                  <item.icon size={35} />
                </div>
                <div className="contact__card__content">
                  <h3>{item.label}</h3>
                  <p>{item.value}</p>
                </div>
              </div>
            </Animate>
          ))}
        </div>

        <Animate
          play
          duration={0.8}
          delay={1}
          start={{ opacity: 0, transform: "translateY(30px)" }}
          end={{ opacity: 1, transform: "translateY(0)" }}
        >
          <div className="contact__cta">
            <p>Available for freelance opportunities and full-time positions</p>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
