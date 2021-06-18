import React from "react";
import "./Footer.css";
function Footer() {
  const currentyear = new Date().getFullYear();
  return (
    <div>
      <div className="footer">
        <ul className="list">
          <li className="item">© {currentyear} All rights reserved</li>
          <li className="item">Efforts By Shriya</li>
          <li className="item">Send US Feedback</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
