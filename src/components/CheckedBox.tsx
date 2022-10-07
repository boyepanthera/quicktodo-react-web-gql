import React from 'react';

function CheckedBox(): JSX.Element {
  return (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='5' y='5' width='16' height='16' fill='#3DA9FC' />
      <rect
        x='1'
        y='1'
        width='24'
        height='24'
        rx='4'
        stroke='#3DA9FC'
        strokeWidth='2'
      />
    </svg>
  );
}

export default CheckedBox;