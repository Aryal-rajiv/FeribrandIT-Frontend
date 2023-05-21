import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate login credentials (you would typically do this on the server-side)
    if (username === 'rajivary1@gmail.com' && password === 'password123') {
      // Update login status and display success message
      setIsLoggedIn(true);
      setShowSuccessMessage(true);
    } else {
      // Clear form fields
      setUsername('');
      setPassword('');

      // Display error message (optional)
      alert('Invalid Email or password!');
    }
  };

  const handleLogout = () => {
    // Clear form fields, reset login status, and hide success message
    setUsername('');
    setPassword('');
    setIsLoggedIn(false);
    setShowSuccessMessage(false);
  };

  return (
    <div>
      <h1 className="display-1 text-center m-4">Login</h1>
      <div className="container">
        <form onSubmit={handleSubmit} className="row g-3 needs-validation" novalidate>
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <br />

          {isLoggedIn ? (
            <button onClick={handleLogout} className="button">
              Logout
            </button>
          ) : (
            <button type="submit" className="button">
              Login
            </button>
          )}
        </form>
      </div>
      {showSuccessMessage && isLoggedIn && (
        <p className="display-6 text-center m-4" style={{ color: 'green', marginTop: '10px' }}>
          Welcome Rajiv Aryal
        </p>
      )}
    </div>
  );
}

export default LoginForm;
