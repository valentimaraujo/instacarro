import React from 'react';
import Menu from './components/Menu';

import Offers from './pages/Offers';

function App() {
  return (
    <>
      <Menu/>
      <div className="container">
        <div className="content">
          <Offers/>
        </div>
      </div>
    </>
  );
}

export default App;
