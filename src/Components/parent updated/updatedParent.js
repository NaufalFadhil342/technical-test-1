import React, { useState } from 'react';
import '../../App.css';

function Child({ setValue }) {
  const clickHandler = () => {
    setValue('Parent has been updated');
  };

  return (
    <>
      <h3>Child</h3>
      <button onClick={clickHandler}>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = useState('I need to be updated from my child');

  return (
    <div>
      <h3>Update Parent State Challenge</h3>
      <div className="wrapper">
        <h1>Parent</h1>
        <div className="box-wrapper">{value}</div>
      </div>
      <div className="wrapper">
        <Child setValue={setValue} />
      </div>
    </div>
  );
}

export default Parent;
