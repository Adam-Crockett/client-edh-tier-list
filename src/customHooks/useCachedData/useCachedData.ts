import { useState, useEffect } from 'react';

function getCachedData(initialState: any) {
  const cachedData = localStorage.getItem('cachedData');
  console.log('before: ', cachedData);
  try {
    return cachedData ? JSON.parse(cachedData) : initialState || {};
  } catch (e) {
    console.error('Error parsing cached data:', e);
    return initialState || {};
  }
}

const useCachedData = (initialState: any = {}) => {
  const [cachedData, setCachedData] = useState<any>(() => {
    return getCachedData(initialState);
  });

  useEffect(() => {
    console.log('setting data: ', cachedData);
    localStorage.setItem('cachedData', JSON.stringify(cachedData));
  }, [cachedData]);

  return [cachedData, setCachedData];
};
export default useCachedData;
