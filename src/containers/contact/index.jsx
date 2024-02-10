import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram,FaLinkedin} from 'react-icons/fa';
import PageHeaderContent from "../../components/PageHeaderContent";
import './styles.scss';

const Contact = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact"
        icon={<FaPhone size={40} />}
      />
      <div className="contact-icons">
        <div className="icon-with-link">
          <FaPhone size={30} />
          <span>Call +92 3042872301</span>
        </div>
        <div className="icon-with-link" onClick={() => openInNewTab("https://mail.google.com/mail/?view=cm&fs=1&to=taimoorhabib948@gmail.com")}>
          <FaEnvelope size={30} />
          <span>Email</span>
        </div>
        <div className="icon-with-link" onClick={() => openInNewTab("https://wa.me/923042872301")}>
          <FaWhatsapp size={30} />
          <span>WhatsApp</span>
        </div>
        <div className="icon-with-link" onClick={() => openInNewTab("https://www.facebook.com/taimoor.habib.96")}>
          <FaFacebook size={30} />
          <span>Facebook</span>
        </div>
        <div className="icon-with-link" onClick={() => openInNewTab("https://www.instagram.com/habib_taimoor/")}>
          <FaInstagram size={30} />
          <span>Instagram</span>
        </div>
        <div className="icon-with-link" onClick={() => openInNewTab("https://www.linkedin.com/in/taimoor-habib-a50b5026a/")}>
          <FaLinkedin size={30} />
          <span>LinkedIn</span>
        </div>
      </div>
      <div className="out-class">
        <h1>CLICK ON THE ICONS!!</h1>
      </div>
    </section>
  );
};

export default Contact;
