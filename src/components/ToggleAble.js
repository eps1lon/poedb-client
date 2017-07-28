import React from 'react';

const toggleAble = Component => ({ show, ...passThrough }) => {
  return (
    <div className={show ? 'visible' : 'hidden'}>
      <Component {...passThrough} />
    </div>
  );
};

export default toggleAble;
