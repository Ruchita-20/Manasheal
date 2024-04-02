import React, { useState } from 'react';
import axios from 'axios';
import './Match.css';
import DoctorDetailsPopup from './DoctorDetailsPopup';

const Match = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phoneNumber: '',
    gender: '',
    selectedSymptom: '',
    doctors: []
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [showDoctorDetails, setShowDoctorDetails] = useState(false);

  const steps = [
    { label: 'Enter Your Name', key: 'name', inputType: 'text' },
    { label: 'Enter Your Age', key: 'age', inputType: 'number' },
    { label: 'Enter Your Phone Number', key: 'phoneNumber', inputType: 'text' },
    { label: 'Select Your Gender', key: 'gender', inputType: 'select', options: ['', 'Male', 'Female', 'Other'] },
    { label: 'What area of consent are you seeking a therapist for?', key: 'selectedSymptom', inputType: 'select', options: ['', 'Anger issues', 'Relationship issues', 'Anxiety issues', 'Depression issues'] }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleNext();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/recommendation', formData);
      setFormData({ ...formData, doctors: response.data });
      setShowDoctorDetails(true);
    } catch (error) {
      console.error('Error fetching recommendation:', error);
    }
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleExit = () => {
    onClose();  // Closing the popup using the onClose function
  };

  const handleDoctorDetailsClose = () => {
    setShowDoctorDetails(false);
  };

  return (
    <div className="popup-container" id="popup">
      <div className="popup" id="pop">
        <button className="exit-btna" onClick={handleExit}>X</button>
        <form onSubmit={handleSubmit}>
          {steps.map((step, index) => {
            if (index + 1 === currentStep) {
              return (
                <div key={index}>
                  <h6>{step.label}:</h6>
                  {step.inputType === 'select' ? (
                    <select
                      name={step.key}
                      value={formData[step.key]}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      required
                    >
                      {step.options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={step.inputType}
                      name={step.key}
                      value={formData[step.key]}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      required
                    />
                  )}
                </div>
              );
            }
            return null;
          })}
          <div className="navigation-btnsa">
            {currentStep > 1 && (
              <button type="button" onClick={handlePrevious}>Previous</button>
            )}
            {currentStep < steps.length ? (
              <button type="button" onClick={handleNext}>Next</button>
            ) : (
              <button type="submit">Get Recommendation</button>
            )}
          </div>
        </form>
      </div>
      {showDoctorDetails && (
        <DoctorDetailsPopup doctors={formData.doctors} onClose={handleDoctorDetailsClose} />
      )}
    </div>
  );
}

export default Match;
