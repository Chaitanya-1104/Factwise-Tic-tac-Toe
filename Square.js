import React from 'react';

const Square = ({ value, onClick }) => {
  const getClass = () => {
    if (value === 'X') return 'square x';
    if (value === 'O') return 'square o';
    return 'square';
  };

  return (
    <button className={getClass()} onClick={onClick}>
      {value === 'X' ? '✖' : value === 'O' ? '✔' : ''}
    </button>
  );
};

export default Square;
