import React, { useEffect, useState } from 'react';
import PredictorForm from '../Components/Prediction/PredictorForm';
import { auth, db } from '../firebase-config';

const Predict = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleStartButtonClick = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser; // Get the currently logged-in user
        if (user) {
          // If user is logged in
          const userDoc = await db.collection('predictionResults').doc(auth.currentUser?.uid).get(); // Assuming user data is stored in 'predictionResults' collection
          if (userDoc.exists) {
            // If user document exists
            setUserData(userDoc.data()); // Set user data in state
          } else {
            console.log('User data not found');
          }
        } else {
          console.log('No user logged in');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData(); // Fetch user data when component mounts
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <button onClick={handleStartButtonClick}>Start</button>
      {showPopup && <PredictorForm csvfile='questions' video='stressed' onClose={handleClosePopup} />}
      <div style={{ color: 'black' }}>
        <h2 style={{ color: 'black' }}>User Data</h2>
        {userData ? (
          <div style={{ color: 'black' }}>
            <p><strong style={{ color: 'black' }}>ID:</strong> {userData.id}</p>
            <p  style={{ color: 'black' }}><strong>Name:</strong> {userData.name}</p>
            <p  style={{ color: 'black' }}><strong>Predicted Total:</strong> {userData.predicted_total}</p>
            <p  style={{ color: 'black' }}><strong>Timestamp:</strong> {userData.timestamp.toDate().toString()}</p>
          </div>
        ) : (
          <p style={{ color: 'black' }}>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Predict;
