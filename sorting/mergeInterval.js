/*
merge intervals
*/

const mergeIntervals = (intervals) => {
  if (intervals.length === 0) {
    return [];
  }

  const startIndex = 0;
  const endIndex = 1;
  
  intervals.sort((a, b) => a[startIndex] - b[startIndex]);
  
  const mergedIntervals = [];
  let mergeStart = intervals[0][startIndex];
  let mergeEnd = intervals[0][endIndex];
  
  for (let i = 1; i < intervals.length; i++) {
    const subsequentInterval = intervals[i];
    
    if (subsequentInterval[startIndex] <= mergeEnd) {
      mergeEnd = Math.max(mergeEnd, subsequentInterval[endIndex]);
    } else {
      mergedIntervals.push([mergeStart, mergeEnd]);
      mergeStart = subsequentInterval[startIndex];
      mergeEnd = subsequentInterval[endIndex];
    }
  }
  
  mergedIntervals.push([mergeStart, mergeEnd]);
  return mergedIntervals;
};



const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];

console.log("Input intervals:", intervals);
console.log("Merged intervals:", mergeIntervals(intervals));
