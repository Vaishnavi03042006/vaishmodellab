import React from 'react';
import Form from './Testfile/form';
const App = () => {
  
  const handleFormSubmit = (userData) => {
    console.log("User data submitted:", userData);
    
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
