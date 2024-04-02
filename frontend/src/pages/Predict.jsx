import React, { useEffect, useState } from 'react';
import PredictorForm from '../Components/Prediction/PredictorForm';
import './Predict.css'; 
import Depression from '../Components/images/depression.png'

const ButtonCard = ({ category, onClick, imageSrc, description }) => {
  return (
      <div className="card align-item-center justify-content-center" style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', glow: '0px 0px 10px 0px #e47830' }}>
        <img src={imageSrc} className="card-img-top" alt="..." />
        <div className="card-body text-align-center ">
          <h4 className="card-title text-center" ><b>{category} Issues</b></h4>
          <h5 className="card-text" style={{ textAlign: 'justify', color: 'black', textAlign: 'center' }}>
            {description}
            <br />
          </h5>
          <div className='btn-div' >
            <button onClick={() => onClick(category)}>{category}</button>
          </div>
        </div>
      </div>
  );
};

const Predict = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(null);
 
  const handleStartButtonClick = (type) => {
    console.log('Button clicked:', type);
    setShowPopup(true);
    setPopupType(type);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupType(null);
  };


  return (
    <>
      <div className="container">
        <div className="d-flex flex-md-row flex-column mb-3 gap-4">
          <ButtonCard 
            category="depression" 
            onClick={handleStartButtonClick} 
            imageSrc={Depression}
            description="This screening test is crafted to offer insights into areas related to depression issues."
          />
          <ButtonCard 
            category="anger" 
            onClick={handleStartButtonClick} 
            imageSrc="https://static.vecteezy.com/system/resources/previews/013/707/880/original/man-close-ears-ignore-loud-screaming-colleagues-shouting-and-lecturing-calm-ignorant-male-distracted-from-coworkers-yelling-stress-free-illustration-vector.jpg" 
            description="This screening test is crafted to offer insights into areas related to anger issues."
          />
          <ButtonCard 
            category="relationship" 
            onClick={handleStartButtonClick} 
            imageSrc="https://img.freepik.com/premium-vector/heart-logo-vector-symbol-valentines-day-ribbon-logotype_709422-87.jpg" 
            description="This screening test is crafted to offer insights into areas related to relationship issues."
          />
        </div>
      </div>
      {showPopup && <PredictorForm csvfile={popupType} video='stressed' onClose={handleClosePopup} />}
    </>
  );
};

export default Predict;
