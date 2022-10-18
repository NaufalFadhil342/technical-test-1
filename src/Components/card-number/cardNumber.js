import React from 'react';
import '../../App.css';

export const CardNumber = () => {
  const num = [...Array(8).keys()];

  return (
    <div className="card">
      {num.map((item) => (
        <div className="num">
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};
