import React, { useEffect, useState } from 'react';
import PredictorForm from '../Components/Prediction/PredictorForm';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../firebase-config';

const Predict = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleStartButtonClick = (type) => {
    console.log('Button clicked:', type);
    setShowPopup(true);
    setPopupType(type);
  };
  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          // Construct the query to fetch the collection based on user ID
          const q = query(collection(db, 'predictionResults'), where('user.id', '==', user.uid));
          const querySnapshot = await getDocs(q);
          console.log(querySnapshot);
          console.log(user.displayName);
          // Extract data from the query snapshot
          const userDataArray = [];
          querySnapshot.forEach((doc) => {
            userDataArray.push(doc.data());
          });

          // Set the user data state with the fetched data
          setUserData(userDataArray);
          console.log(userDataArray);
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
    setPopupType(null);
  };

  return (
    <>
      <div className="App">
        <button onClick={() => handleStartButtonClick('depression')}>Depression</button>
        <button onClick={() => handleStartButtonClick('anger')}>Anger</button>
        <button onClick={() => handleStartButtonClick('relationship')}>Relationship</button>
        <div style={{ color: 'black' }}>
          <h2 style={{ color: 'black' }}>User Data</h2>
          {userData ? (
            <div className='fetch' style={{ color: 'black' }}>
              {userData.map((data, index) => (
                <div key={index}>
                  <p style={{ color: 'black' }}><strong>ID:</strong> {data.user?.id}</p>
                  <p style={{ color: 'black' }}><strong>Name:</strong> {data.user?.name}</p>
                  <p style={{ color: 'black' }}><strong>Predicted Total:</strong> {data.predicted_total}</p>
                  <p style={{ color: 'black' }}><strong>Timestamp:</strong> {data.timestamp?.toDate().toString()}</p>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: 'black' }}>Loading...</p>
          )}
        </div>
      </div>
      {showPopup && <PredictorForm csvfile={popupType} video='stressed' onClose={handleClosePopup} />}
    </>
  );
};

export default Predict;
