import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate login credentials (you would typically do this on the server-side)
    if (username === 'admin' && password === 'password') {
      // Display success message
      setShowSuccessMessage(true);
    } else {
      // Clear form fields
      setUsername('');
      setPassword('');

      // Display error message (optional)
      alert('Invalid username or password!');
    }
  };

  return (
    <div>
      <h1 className="display-1 text-center m-4">Login</h1>
    <div className="container">
      <form onSubmit={handleSubmit} className="row g-3 needs-validation" novalidate>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <br/>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        <br/>

          <input type="submit" value="Submit" className='button' />
         
        
      </form>
      </div>
      {showSuccessMessage && (
        <p style={{ color: 'green', marginTop: '10px' }}>
          Login successful!
        </p>
      )}
    </div>
  );
}

export default LoginForm;
