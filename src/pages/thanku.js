import React from 'react';
import Weblayout from '../layout/Weblayout';
import axios from '../Admin/component/axios';

const ThankYouPage = () => {
    
  return (
  <Weblayout>
    <div className="container text-center d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card shadow p-4">
        <div className="card-body">
          <h1 className="card-title text-success mb-3">Thank You!</h1>
          <p className="card-text">Your submission has been received successfully.</p>
          <p className="card-text">We appreciate your response and will get back to you soon.</p>
          <a href="/" className="btn btn-primary mt-3">Go to Homepage</a>
        </div>
      </div>
    </div>
  </Weblayout>
    
  );
};

export default ThankYouPage;
