import { useState } from 'react';

import { GraphTable } from './Table';

import './App.css';


function App() {
  const [state, setState] = useState(false);

  return (
    <div className='table'>
      <h1>Vite + React</h1>
      <GraphTable />
    </div>
  );
}

export default App;
