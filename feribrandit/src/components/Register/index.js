import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object with the form data
    const formData = {
      firstName,
      lastName,
      email,
      password
    };

    setShowSuccessMessage(true);


    axios.post('/signup', formData)
    .then((response) => {
      console.log(response.data);
      // Reset form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
    });

  };

  return (
    <>
      <h1 className="display-1 text-center m-4">Signup</h1>
    <div className="container">

    <form onSubmit={handleSubmit} className="row g-3 needs-validation" novalidate>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange}/>
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
    </div>
    {showSuccessMessage && (
        <h1 className="display-1 text-center m-4" style={{ color: 'green', marginTop: '10px' }}>
          Registered successfully!
        </h1>
      )}
    </>
  );
};



export default SignupForm;