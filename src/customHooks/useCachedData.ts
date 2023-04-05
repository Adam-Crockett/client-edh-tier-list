import { useState, useEffect } from 'react';
import { CachedData } from '../interfaces';

function getCachedData(initialState: CachedData, cacheDuration: number) {
  const cachedData = localStorage.getItem('cachedData');
  const cachedTimestamp = localStorage.getItem('cachedTimestamp');

  if (cachedTimestamp && cachedData) {
    const now = Date.now();
    const timeStamp = parseInt(cachedTimestamp);
    const isStale = now - timeStamp > cacheDuration;
    if (!isStale) {
      try {
        const updatedData: CachedData = JSON.parse(cachedData);
        return {
          cardList: updatedData.cardList,
          currentCodes: updatedData.currentCodes,
          tierLevels: updatedData.tierLevels
        };
      } catch (e) {
        console.error('caching error', e);
      }
    }
  }
  return initialState || { cardList: [], currentCodes: [], tierLevels: [] };
}

const useCachedData = (
  initialState: CachedData = { cardList: [], currentCodes: [], tierLevels: [] },
  cacheDuration = 1.728e8
) => {
  const [cachedData, setCachedData] = useState<CachedData>(() => {
    return getCachedData(initialState, cacheDuration);
  });

  useEffect(() => {
    localStorage.setItem('cachedData', JSON.stringify(cachedData));
    localStorage.setItem('cachedTimestamp', Date.now().toString());
  }, [cachedData]);

  return { cachedData, setCachedData };
};
export default useCachedData;
