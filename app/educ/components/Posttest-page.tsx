'use client';
import React, { useState } from 'react';
import BarGraph from './post-summary';

const PosttestPage: React.FC = () => {
  const [role, setRole] = useState<string>('post');
  return (
    <div>
      <BarGraph />
    </div>
  );
};

export default PosttestPage;
