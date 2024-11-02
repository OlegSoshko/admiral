import { useState } from 'react';
import { FontsVTBGroup } from '@admiral-ds/react-ui'

import { Test } from './Table';

import './App.css';


function App() {
  const [state, setState] = useState(false);

  return (
    <div className='table'>
      < FontsVTBGroup />
      <h1>Vite + React</h1>
      <Test />
    </div>
  );
}

export default App;
