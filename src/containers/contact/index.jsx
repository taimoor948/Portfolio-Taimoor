import React from "react";
import {
  FaPhone, FaEnvelope, FaWhatsapp,
  FaGithub, FaLinkedin, FaGlobe,
} from "react-icons/fa";
import PageHeaderContent from "../../components/PageHeaderContent";
import "./styles.scss";
import { Animate } from "react-simple-animate";

// ── CMS-driven content ─────────────────────────────────────
// All contact details live in src/content/contact.json.
// The "iconName" field in the JSON maps to a react-icons component
// via the lookup table below. This keeps icons code-only (they
// can't be stored in JSON) while still letting CMS control everything else.
import contactContent from "../../content/contact.json";

// Icon registry: maps the string stored in JSON → actual component.
// Add new entries here if you add new iconName values in the CMS.
const ICON_MAP = {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaGlobe,
};

const Contact = () => {
  const { introHeading, introText, ctaText, contacts } = contactContent;

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
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
            <h2>{introHeading}</h2>
            <p>{introText}</p>
          </div>
        </Animate>

        <div className="contact__cards">
          {contacts.map((item, index) => {
            // Resolve the icon component from the string name stored in JSON
            const IconComponent = ICON_MAP[item.iconName] || FaGlobe;

            return (
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
                    <IconComponent size={35} />
                  </div>
                  <div className="contact__card__content">
                    <h3>{item.label}</h3>
                    <p>{item.value}</p>
                  </div>
                </div>
              </Animate>
            );
          })}
        </div>

        <Animate
          play
          duration={0.8}
          delay={1}
          start={{ opacity: 0, transform: "translateY(30px)" }}
          end={{ opacity: 1, transform: "translateY(0)" }}
        >
          <div className="contact__cta">
            <p>{ctaText}</p>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
