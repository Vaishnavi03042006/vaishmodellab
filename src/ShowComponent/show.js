import React, { useState } from 'react';
function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(false);
  const toggleMessage = () => {
    setShowMessage((prevShowMessage) => !prevShowMessage);
};
return (
    <div>
      <button onClick={toggleMessage}>
        {showMessage ? 'Hide Component' : 'Show Component'}
      </button>
      {showMessage && <p>Hi! How are You!!!</p>}
    </div>
  );
}
export default ToggleMessage;
