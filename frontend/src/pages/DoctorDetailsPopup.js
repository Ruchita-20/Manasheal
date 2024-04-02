import React from 'react';
import './DoctorDetailsPopup.css';

const DoctorDetailsPopup = ({ doctors, onClose }) => {
  return (
    <div className="doctor-details-popup-container">
      <div className="doctor-details-popup-content">
        <button className="doctor-details-exit-btn" onClick={onClose}>X</button>
        <h2>Recommended Doctor</h2>
        {doctors.length > 0 ? (
          doctors.map((doctor, index) => (
            <div key={index}>
              <p>
                <span className="doctor-label">Name:</span><span className="doctor-info">{doctor.Name}</span><br />
                <span className="doctor-label">Speciality:</span><span className="doctor-info">{doctor.Specialty}</span><br />
                <span className="doctor-label">Location:</span><span className="doctor-info">{doctor.Location}</span><br />
                <span className="doctor-label">Experience:</span><span className="doctor-info">{doctor.Experience}</span><br />
                <span className="doctor-label">Contact:</span><span className="doctor-info">{doctor.Contact}</span><br />
              </p>
              <img src={doctor['Profile Picture']} alt={doctor.Name} />
              <hr />
            </div>
          ))
        ) : (
          <p>No doctors found.</p>
        )}
      </div>
    </div>
  );
}

export default DoctorDetailsPopup;
