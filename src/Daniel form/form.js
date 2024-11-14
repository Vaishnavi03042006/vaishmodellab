import React, { useState } from 'react';

function BasicForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Send Us Your Feedback</h2>
      
      <div style={styles.formGroup}>
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
      </div>
      
      <div style={styles.formGroup}>
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
      </div>
      
      <div style={styles.formGroup}>
        <label style={styles.label}>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
          required
        />
      </div>
      
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px'
  },
  formGroup: {
    marginBottom: '15px'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    color: '#555'
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'vertical',
    minHeight: '100px',
    marginBottom: '10px'
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  }
};

export default BasicForm;
