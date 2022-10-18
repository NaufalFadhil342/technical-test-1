import React from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const Draw = () => {
  return (
    <div>
      <div
        style={{
          minWidth: '240px',
          padding: '0.5rem 1rem',
          display: 'flex',
          backgroundColor: '#479dff',
          borderRadius: '16px',
          flexDirection: 'column',
          color: 'white',
        }}
      >
        <p
          style={{
            fontSize: '1rem',
            fontWeight: '600',
            lineHeight: 'calc(1rem + 1.25)',
            marginTop: '0.5rem',
          }}
        >
          Total Received
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <AttachMoneyIcon style={{ width: '40px', margin: '0.5rem' }} />
        <p
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            lineHeight: 'calc(2rem + 1.25)',
            margin: '0',
          }}
        >
          $15.000
        </p>
      </div>
    </div>
  );
};
