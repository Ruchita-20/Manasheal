// TherapistData.js

import React from "react";
import "./CardTherapist.css";

function TherapistData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.img} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      
      
      <div className="social-links">
        {props.socialLinks && props.socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.icon} 
          </a>
        ))}
      </div>
    </div>
  );
}

export default TherapistData;