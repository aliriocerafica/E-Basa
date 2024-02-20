'use client';
import React, { useState } from 'react';
import BarGraph from './pre-summary';

const PretestPage: React.FC = () => {
  const [role, setRole] = useState<string>('pre');
  return (
    <div>
      <BarGraph />
    </div>
  );
};

export default PretestPage;
