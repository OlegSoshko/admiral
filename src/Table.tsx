import { useState } from 'react';
import { SelectField, IconButton, Button } from '@admiral-ds/react-ui';
import { SystemSettingsOutline } from '@admiral-ds/icons';


export const tabs = [
  {
    id: 'docoper',
    content: 'docoper',
  },
  {
    id: 'guar',
    content: 'guar',
  },
  {
    id: 'common',
    content: 'common',
  },
  {
    id: 'all',
    content: 'all',
  },
  {
    id: 'history',
    content: 'history',
  },
];

export const Test = () => {
  const [loading, setLoading] = useState(false);
  
  const toggle = () => {
    setLoading((prev) => !prev);
  }

  return (
    <div>
      <IconButton>
        <SystemSettingsOutline />
      </IconButton>
      <SelectField isLoading={loading} />
      <Button onClick={toggle}>toggle</Button>
    </div>
  )
}
