import { useState } from 'react';
import { OverflowMenu, MenuItem } from '@admiral-ds/react-ui';

import './App.css';

function App() {
  const [state, setState] = useState(false);

  const t = [
    {
      id: 'addItem',
      render: (options: any) => (
        <MenuItem {...options} key="addItem">
          {'addItem'}
        </MenuItem>
      ),
      subItems: [
        {
          id: 'addItemHigher',
          render: (options: any) => (
            <MenuItem
              {...options}
              key="addItemHigher"
              onClick={() => {
                console.log('addItemHigher');
              }}
            >
              {'higher'}
            </MenuItem>
          ),
        },
        {
          id: 'addItemLower',
          render: (options: any) => (
            <MenuItem
              {...options}
              key="addItemLower"
              onClick={() => {
                console.log('addItemLower');
              }}
            >
              {'lower'}
            </MenuItem>
          ),
        },
      ],
    },
  ];

  return (
    <>
      <h1>Vite + React</h1>
      <div className="tables">
        <OverflowMenu
          items={t}
          isVertical
          isVisible={state}
          className='menu'
          onVisibilityChange={() => setState(true)}
          onClickOutside={() => {setState(false)}}
        />
      </div>
    </>
  );
}

export default App;
