import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    source: '',
    destination: '',
    date: '',
    seats: ''
  });

  // Load data from localStorage when the component first renders
  useEffect(() => {
    const savedData = localStorage.getItem('busBooking');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Update state when input changes
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  // Save to localStorage when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('busBooking', JSON.stringify(formData));
    alert('Booking successfully saved to local storage!');
  };

  return (
    <div className="container">
      <h2>Bus Booking Form</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label>Passenger Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Source:</label>
          <input 
            type="text" 
            name="source" 
            value={formData.source} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Destination:</label>
          <input 
            type="text" 
            name="destination" 
            value={formData.destination} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Date of Journey:</label>
          <input 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Number of Seats:</label>
          <input 
            type="number" 
            name="seats" 
            min="1"
            value={formData.seats} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit">Book Tickets</button>
      </form>
    </div>
  );
}

export default App;
