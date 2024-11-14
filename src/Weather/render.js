import React from 'react';
import WeatherApp from './Weather/WeatherApp';

function App() {
  return (
    <div style={{
      padding: '10px', 
      backgroundColor: 'violet',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <WeatherApp />
    </div>
  );
}

export default App;

