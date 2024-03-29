import React, {useEffect} from 'react';
import './card.css';
import Depressionimg from '../images/depression.png'

const DepressionCard = () => {

  const TypeForm = () => {
    useEffect(() => {
     
      const script = document.createElement('script');
      script.src = '//embed.typeform.com/next/embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }, []); 

    return (
      <div data-tf-live="01HHJDXECH841WNKNMHHVCNGE1"></div>
    );
  };


  return (
    <div className="col ">
      <div className="card align-item-center justify-content-center " style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', glow: '0px 0px 10px 0px #e47830' }}>
        <img src={Depressionimg} className="card-img-top" alt="..." />
        <div className="card-body text-align-center ">
          <h5 className="card-title text-center"  ><b>Depression</b></h5>
          <p className="card-text" style={{ textAlign: 'justify', color: 'black', textAlign: 'center' }}>
          This is a screening test that will allow you to know if you're facing any symptoms of depression.
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

export default DepressionCard;
