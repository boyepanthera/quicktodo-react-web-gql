import React from 'react';

function AddButton(): JSX.Element {
  return (
    <svg
      width='44'
      height='44'
      viewBox='0 0 44 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='44' height='44' rx='8' fill='#D8EEFE' />
      <path
        d='M22 16V22M22 22V28M22 22H28M22 22H16'
        stroke='#3DA9FC'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default AddButton;
