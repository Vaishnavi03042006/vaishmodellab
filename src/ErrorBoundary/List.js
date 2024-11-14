import React from 'react';
const List = ({ items }) => {
  return (
    <div>
      <h3>Items List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
      </ul>
    </div>
  );
};

export default List;

//App.js
/*import React from 'react';
import ErrorBoundary from './ErrorBoundary/errorboundary';
import List from './ErrorBoundary/List';

function App() {
  const items = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

  return (
    <div>
      <h1>Understanding React Error Messages</h1>
      <ErrorBoundary>
        <List items={items} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
*/