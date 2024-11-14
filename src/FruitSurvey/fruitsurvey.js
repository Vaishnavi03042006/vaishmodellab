import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
function FruitSurvey() {
  const [name, setName] = useState('');
  const [favoriteFruit, setFavoriteFruit] = useState(null);
  const [message, setMessage] = useState('');
  const fruitOptions = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && favoriteFruit) {
      setMessage(`Hello, ${name}! Your favorite fruit is ${favoriteFruit}.`);
    } else {
      setMessage("Please enter your name and choose a fruit.");
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Fruit Survey
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField 
          label="Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-testid="name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Autocomplete
          options={fruitOptions}
          value={favoriteFruit}
          onChange={(e, newValue) => setFavoriteFruit(newValue)}
          renderInput={(params) => (
            <TextField 
              {...params} 
              label="Choose a fruit" 
              variant="outlined"
            />
          )}
          data-testid="autocomplete"
          fullWidth
          margin="normal"
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          data-testid="button"
          fullWidth
          style={{ marginTop: '16px' }}
        >
          Submit
        </Button>
      </form>
      {message && (
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          {message}
        </Typography>
      )}
    </div>
  );
}

export default FruitSurvey;
/*
import React from 'react';
import FruitSurvey from './FruitSurvey/fruitsurvey';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <FruitSurvey />
    </div>
  );
}

export default App;

*/
