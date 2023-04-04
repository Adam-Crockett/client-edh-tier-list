import { useState, useEffect } from 'react';

function getCachedData(initialState: any, cacheDuration: number) {
  const cachedData = localStorage.getItem('cachedData');
  const cachedTimestamp = localStorage.getItem('cachedTimestamp');

  if (cachedTimestamp && cachedData) {
    const now = Date.now();
    const timeStamp = parseInt(cachedTimestamp);
    const isStale = now - timeStamp > cacheDuration;
    if (!isStale) {
      try {
        return JSON.parse(cachedData);
      } catch (e) {
        console.error('caching error', e);
      }
    }
  }
  return initialState || {};
}

const useCachedData = (initialState: any = {}, cacheDuration = 1.728e8) => {
  const [cachedData, setCachedData] = useState<any>(() => {
    return getCachedData(initialState, cacheDuration);
  });

  useEffect(() => {
    localStorage.setItem('cachedData', JSON.stringify(cachedData));
    localStorage.setItem('cachedTimestamp', Date.now().toString());
  }, [cachedData]);

  return [cachedData, setCachedData];
};
export default useCachedData;
