import React from 'react';
import { useSelector } from 'react-redux';

function SetList() {
  // Resolve state typing for typescript
  const { sets, isLoading } = useSelector((state: any) => state.sets);

  if (!sets.length && !isLoading) {
    return <div>'No Sets found';</div>;
  }
  return isLoading ? (
    <div>
      <p>Loading Sets...</p>
    </div>
  ) : (
    <div>{sets}</div>
  );
}

export default SetList;
