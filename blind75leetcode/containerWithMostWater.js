

const containerWithMostWater = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maximum = 0;
  
  while(left < right){
    let width = right-left;
    
    let maxArea = Math.min(height[left], height[right]) * width;
    
    maximum = Math.max(maximum,maxArea);
    
    if(height[left] <= height[right]){
      left++;
    } else {
      right--;
    }
  }
  
  return maximum
}

const heights = [1,8,6,2,5,4,8,3,7];
const result = containerWithMostWater(heights);
console.log(result)
