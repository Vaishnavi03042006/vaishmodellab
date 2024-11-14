import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // to track if the form is submitted

  const handleLogin = () => {
    // Check if username and password are not empty (can add more validation as needed)
    if (username && password) {
      alert('Login Successful!'); // Show success message on login
      setIsSubmitted(true); // Mark the form as submitted
    } else {
      alert('Please fill in both fields!');
    }
  };

  const handleCancel = () => {
    // Reset the form
    setUsername('');
    setPassword('');
    setIsSubmitted(false); // Reset the submitted state
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>{isSubmitted ? 'Welcome Back!' : 'Login'}</h2>

      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="username" style={{ display: 'block' }}>Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          disabled={isSubmitted} // Disable input if form is submitted
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="password" style={{ display: 'block' }}>Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          style={{ width: '100%', padding: '8px', marginBottom: '20px' }}
          disabled={isSubmitted} // Disable input if form is submitted
        />
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={handleLogin}
          style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', marginRight: '10px' }}
          disabled={isSubmitted} // Disable login button after form submission
        >
          Login
        </button>

        <button
          onClick={handleCancel}
          style={{ padding: '10px 20px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
/*
import React from 'react';
import LoginDialog from './LoginPage/login';

function App() {
  return (
    <div>
       <h1 style={{ textAlign: 'center' }}>Login Page</h1>
      <LoginDialog />
    </div>
  );
}

export default App;

*/