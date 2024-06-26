import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import './Predict.css'; 
import CanvasJSReact from '@canvasjs/react-charts';


const Progress= () => {
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState('');
  const [dataPointsDepression, setDataPointsDepression] = useState([]);
  const [dataPointsAnger, setDataPointsAnger] = useState([]);
  const [dataPointsRelationship, setDataPointsRelationship] = useState([]);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          setUserName(user.displayName);
          const q = query(collection(db, 'predictionResults'), where('user.id', '==', user.uid));
          const querySnapshot = await getDocs(q);

          const userDataArray = [];
          const dataPointsArrayDepression = [];
          const dataPointsArrayAnger = [];
          const dataPointsArrayRelationship = [];

          querySnapshot.forEach((doc) => {
            const data = doc.data();
            userDataArray.push(data);

            const point = { x: new Date(data.timestamp?.toDate()), y: data.predicted_total };

            switch (data.test?.category) {
              case 'depression':
                dataPointsArrayDepression.push(point);
                break;
              case 'anger':
                dataPointsArrayAnger.push(point);
                break;
              case 'relationship':
                dataPointsArrayRelationship.push(point);
                break;
              default:
                break;
            }
          });

          setUserData(userDataArray);

          dataPointsArrayDepression.sort((a, b) => a.x - b.x);
          dataPointsArrayAnger.sort((a, b) => a.x - b.x);
          dataPointsArrayRelationship.sort((a, b) => a.x - b.x);

          setDataPointsDepression(dataPointsArrayDepression);
          setDataPointsAnger(dataPointsArrayAnger);
          setDataPointsRelationship(dataPointsArrayRelationship);
        } else {
          console.log('No user logged in');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);


  const optionsDepression = {
    theme: "light2",
    title: {
      text: "Depression Test Results Over Time"
    },
    axisX: {
      valueFormatString: "DD MMM, YYYY",
    },
    axisY: {
      title: "Predicted Total",
      includeZero: false
    },
    data: [{
      type: "line",
      yValueFormatString: "#,##0.00",
      dataPoints: dataPointsDepression
    }]
  };

  const optionsAnger = {
    theme: "light2",
    title: {
      text: "Anger Test Results Over Time"
    },
    axisX: {
      valueFormatString: "DD MMM, YYYY",
      interval: 7
    },
    axisY: {
      title: "Predicted Total",
      includeZero: false
    },
    data: [{
      type: "line",
      yValueFormatString: "#,##0.00",
      dataPoints: dataPointsAnger
    }]
  };

  const optionsRelationship = {
    theme: "light2",
    title: {
      text: "Relationship Test Results Over Time"
    },
    axisX: {
      valueFormatString: "DD MMM, YYYY",
      interval: 7
    },
    axisY: {
      title: "Predicted Total",
      includeZero: false
    },
    data: [{
      type: "line",
      yValueFormatString: "#,##0.00",
      dataPoints: dataPointsRelationship
    }]
  };

  const renderTable = (category) => {
    const filteredData = userData?.filter(data => data.test?.category === category);
    return (
      <table className="user-data-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Predicted Total</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.map((data, index) => (
            <tr key={index}>
              <td>{data.test?.category}</td>
              <td>{Math.round(data.predicted_total)}%</td>
              <td>{data.timestamp?.toDate().toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <div className="container">
        <div className="user-greeting">
          <p style={{ color: 'black' }}>Hello {userName}</p>
        </div>
        <div className="user-data-container">
          <h2>User Data</h2>
          <div className="row">
            <div className="col-md-4 gap-4">
              <div className="card">
                <h3>Depression</h3><br/>
                <CanvasJSReact.CanvasJSChart options={optionsDepression} /><br/>
                {renderTable('depression')}
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h3>Anger</h3>
                <CanvasJSReact.CanvasJSChart options={optionsAnger} /><br/>
                {renderTable('anger')}<br/>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h3>Relationship</h3>
                <CanvasJSReact.CanvasJSChart options={optionsRelationship} /><br/>
                {renderTable('relationship')}<br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Progress;
