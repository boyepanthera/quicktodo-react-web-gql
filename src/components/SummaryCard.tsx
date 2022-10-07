import React from 'react';

interface SummaryCardProps {
  title: string;
  count: number;
}

function SummaryCard({ title, count }: SummaryCardProps): JSX.Element {
  return (
    <div className='summary-card'>
      <h2 className='summary-title'>{title}</h2>
      <div className='summary-count'>{count}</div>
    </div>
  );
}

export default SummaryCard;
