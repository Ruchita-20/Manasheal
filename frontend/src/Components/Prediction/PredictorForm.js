import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse'; 
import './PredictorForm.css'; 
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions
import { db, auth } from '../../firebase-config'; // Import your Firestore instance
import depressionData from './depressionData.json'; 

const PredictorForm = ({ csvfile, video, onClose }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState(Array(10).fill('10'));
  const [result, setResult] = useState(null);
  const [selectedOption, setSelectedOption] = useState({});
  const [showForm, setShowForm] = useState(true);
  const [severity, setSeverity] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/${csvfile}.csv`); // Assuming CSV files are in the public folder
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');
        const csv = decoder.decode(result.value);
        const { data } = Papa.parse(csv, { header: true });
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [csvfile]);

  useEffect(() => {
    if (result !== null) {
      console.log('Result State:', result);
      // Call function to store result in Firestore
      setSeverity(calculateSeverity(result.predicted_total));
      storePredictionResult(result.predicted_total);
    }
  }, [result]);

  const calculateSeverity = (percentage) => {
    if (percentage < 36) {
      return "mild";
    } else if (percentage >= 36 && percentage < 75) {
      return "moderate";
    } else {
      return "severe";
    }
  };


  const storePredictionResult = async (predictedTotal) => {
    try {
      const docRef = await addDoc(collection(db, 'predictionResults'), {
        user: { 
          name: auth.currentUser.displayName, 
          id: auth.currentUser.uid 
        },
        test: { 
          category: csvfile, // Category is the key
        },
        predicted_total: predictedTotal,
        timestamp: new Date(),
      });
      console.log('Prediction result stored with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding prediction result: ', error);
    }
  };
  
  

  const handleResponseChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
    setSelectedOption({ ...selectedOption, [index]: value });
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 2) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 500);
    }
  };
 
  const handlePreviousQuestion = () => {
    setTimeout(() => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      } 
    }, 500);
  };

  const handleExit = () => {
    onClose();
  };

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
  
    try {
      const res = await axios.post('http://localhost:5000/predict', {
        ...responses.reduce((acc, response, index) => {
          acc[`col${index}`] = response;
          return acc;
        }, {})
      });
      setResult({
        predicted_total: res.data.predicted_total,
      });
      setShowForm(false); // Hide the form after submitting
    } catch (error) {
      console.log('Error predicting result', error);
    }
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <button className="exit-btn" onClick={handleExit}>X</button>
        <form onSubmit={handleSubmit}>
          <video autoPlay muted loop id="background-video">
            <source src={`/${video}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {showForm && questions.length > 0 && (
            <>
              <p className='question'>{questions[currentQuestionIndex]?.question}</p>
              {questions[currentQuestionIndex+1]? 
              <div className="answers">
                <label><input type='radio' value="10" name={`col${currentQuestionIndex}`} checked={selectedOption[currentQuestionIndex] === "10"} onChange={() => handleResponseChange(currentQuestionIndex, "10")}/>Rarely</label>
                <label><input type='radio' value="20" name={`col${currentQuestionIndex}`} checked={selectedOption[currentQuestionIndex] === "20"} onChange={() => handleResponseChange(currentQuestionIndex, "20")}/>Sometimes</label>
                <label><input type='radio' value="30" name={`col${currentQuestionIndex}`} checked={selectedOption[currentQuestionIndex] === "30"} onChange={() => handleResponseChange(currentQuestionIndex, "30")}/>Frequently</label>
              </div>
              : ""}
            </>
          )}
          {showForm && questions[currentQuestionIndex]?
          <div className="navigation-btns">
            {(currentQuestionIndex +1)> 0 && (
              <button type="button" onClick={handlePreviousQuestion}>Previous</button>
            )}
            {(currentQuestionIndex + 1) < (questions.length - 1) ? (
              <button type="button" onClick={handleNextQuestion}>Next</button>
            ) : (
              <button type="submit" id='predict'>Predict</button>
            )}
          </div>:""}
        </form>
        {!showForm && result !== null && (
          <div className='prediction'>
            <h2><u>{`${csvfile} Issue Test Result`.toUpperCase()}</u></h2>
            <p>Percentage: {result.predicted_total}</p>
            <p>Severity: {severity}</p> <hr/>
            <div className='suggestions'>
              <ul>
            {depressionData[csvfile]?.[severity] && (
            Object.keys(depressionData[csvfile][severity]).map((key) => (
          <li key={key}>{depressionData[csvfile][severity][key]}</li>
             ))
            )}
            </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PredictorForm;
