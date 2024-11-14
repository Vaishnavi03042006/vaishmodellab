import React, { useState } from 'react';

function TransformationToggle() {
  const [transformation, setTransformation] = useState('Kaioken');

  const toggleTransformation = () => {
    setTransformation((prevTransformation) => 
      prevTransformation === 'Kaioken' ? 'SuperSaiyan' : 'Kaioken'
    );
  };

  return (
    <div>
      <h1>Current Transformation: {transformation}</h1>
      <button onClick={toggleTransformation}>
        Toggle Transformation
      </button>
    </div>
  );
}

export default TransformationToggle;
