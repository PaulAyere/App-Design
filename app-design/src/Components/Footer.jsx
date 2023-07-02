import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4">
      <div className="container mx-auto text-white text-center">
        <div className="flex flex-wrap justify-center mt-4">
          <a className="footer-icon m-2">
            <FontAwesomeIcon icon={faFacebookF} size="2x" className="hover:text-pink-500" />
          </a>
          <a className="footer-icon m-2">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="hover:text-pink-500" />
          </a>
          <a className="footer-icon m-2">
            <FontAwesomeIcon icon={faGoogle} size="2x" className="hover:text-pink-500" />
          </a>
          <a className="footer-icon m-2">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="hover:text-pink-500" />
          </a>
          <a className="footer-icon m-2">
            <FontAwesomeIcon icon={faYoutube} size="2x" className="hover:text-pink-500" />
          </a>
        </div>
        <p className="mt-4 text-sm">&copy; 2023 Aghughu Paulinus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
