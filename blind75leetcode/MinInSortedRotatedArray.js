/*
this is basically binary search 
*/


const MinInRotatedSortedArray = (arr) => {
 let left = 0;
 let right = arr.length - 1;
 
 while(left < right){
   let mid = Math.floor((right+left) / 2);
   
   if(arr[right] <= arr[mid]){
     left = mid+1;
   } else {
     right = mid;
   }
 }
 
 return arr[left]
}

const arr = [4,5,6,7,0,1,2];
console.log(MinInRotatedSortedArray(arr));
