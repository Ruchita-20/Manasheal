import React, { useEffect } from 'react';
import "./CardTherapist.css";
import TherapistData from "./TherapistData";
import person from "../images/person.png";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";

import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function CardTherapist() {
  const socialLinksicon= [
    { url: "https://facebook.com", icon: <FaFacebook/>, label: "Facebook" },
    { url: "https://twitter.com", icon: <FaTwitter/>, label: "Twitter" },
    { url: "https://linkedin.com", icon: <FaLinkedinIn/>, label: "Linkedin" },
    // Add more social links as needed
  ];

  

  const TypeForm = () => {
    useEffect(() => {
      // Load Typeform embed script
      const script = document.createElement('script');
      script.src = '//embed.typeform.com/next/embed.js';
      script.async = true;
      document.body.appendChild(script);

      // Cleanup script on component unmount
      return () => {
        document.body.removeChild(script);
      };
    }, []); // Run effect only once on component mount

    return (
      <div data-tf-live="01HHJKZWD2ST89SEYYG6A8V0T1"></div>
    );
  };




  return (
    <div className="container">
        <div className="therapist">
            <h3>Healing Team Ensemble </h3>
            <h1>Introducing Our Adult Therapist Team</h1>
            <p> Trained in leading global therapies, our diverse team of adult counseling therapists genuinely cares about guiding you toward your goals.</p>
            <span className='doctor'></span>
            <div className="therapistcard">
                <TherapistData
                img={person1}
                heading="Dr. Kirti Eppanapelli"
                text="MBBS, psychiatrist"
                socialLinks={socialLinksicon}
                />

                <TherapistData
                img={person}
                heading="Dr. Siddhant Bhoi"
                text="Relationship psychologist"
                socialLinks={socialLinksicon}
                />

                <TherapistData
                img={person2}
                heading="Dr. Ruchita Dalvi"
                text="Physiotherapist"
                socialLinks={socialLinksicon}
                />

                
            </div>
            <div className="match1">
              <TypeForm/>
            </div>
          

        </div>
    </div>
  );
}

export default CardTherapist;