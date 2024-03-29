import React, {useEffect} from 'react';
import './card.css';

const AngerCard = () => {

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
      <div data-tf-live="01HHJCRAAR8KJNHSXH675VPEVH"></div>
    );
  };

  return (
    <div className="col ">
      <div className="card align-item-center justify-content-center " style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', glow: '0px 0px 10px 0px #e47830' }}>
        <img src="https://static.vecteezy.com/system/resources/previews/013/707/880/original/man-close-ears-ignore-loud-screaming-colleagues-shouting-and-lecturing-calm-ignorant-male-distracted-from-coworkers-yelling-stress-free-illustration-vector.jpg" className="card-img-top" alt="..." />
        <div className="card-body text-align-center ">
          <h5 className="card-title text-center"  ><b>Anger Issues</b></h5>
          <p className="card-text" style={{ textAlign: 'justify', color: 'black', textAlign: 'center' }}>
          This screening test is crafted to offer insights into areas related to anger issues.
            <br />
          </p>
          <div className='btn-div' >
             <TypeForm/>
          </div>
          
        </div>
      </div>

      
    </div>
  );
};

export default AngerCard;
