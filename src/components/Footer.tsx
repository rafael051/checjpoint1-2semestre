import React from 'react';
import logo from '../assets/images/logo.svg';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo Ratings" />
      </div>
      <div className="footer-content">
        <FooterColumn title="COMPANY" />
        <FooterColumn title="COMPANY" />
        <FooterColumn title="COMPANY" />
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title }) => {
  return (
    <div className="footer-column">
      <span className="footer-column-title">{title}</span>
      <ul className="footer-column-list">
        <li>About Us</li>
        <li>Partnerships</li>
        <li>FAQ</li>
      </ul>
    </div>
  );
};

export default Footer;
