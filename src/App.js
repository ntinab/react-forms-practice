import React, { useState } from 'react'
import './App.css'

export default function App() {
  
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    complaint: "",
    contact: "phone",
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
      <h2>Complaining form!</h2>
      <div className="form__section-left">
        <label>
          Full name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Address
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        </div>
        <div className="form__section-right">
        <label>
          Write your complaint
          <textarea
            name="complaint"
            rows="10"
            placeholder="You can complain here"
            value={formData.complaint}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <div className="form__radio-group">
          <p>How do you want to be contacted? </p>
          <label>
            <input
              type="radio"
              name="contact"
              value="phone"
              checked={formData.contact === "phone"}
              onChange={handleInputChange}
            />
            Phone
          </label>
          <label>
            <input
              type="radio"
              name="contact"
              value="email"
              checked={formData.contact === "email"}
              onChange={handleInputChange}
            />
            Email
          </label>
          <label>
            <input 
              type="radio" 
              name="contact" 
              value="post" 
              checked={formData.contact === "post"}
              onChange={handleInputChange}
            />
              Slow Mail
          </label>
          <label>
            <input 
            type="radio" 
            name="contact" 
            value="none"
            checked={formData.contact === "none"}
            onChange={handleInputChange}
            />
              No contact!
          </label>
          </div>
        <label>
          I agree you take my data, and do whatever
          <input
            type="checkbox"
            name="consent"
            id="consent"
            checked={formData.consent}
            onChange={handleInputChange}
          />
        </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}