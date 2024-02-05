function maxArea (arr){
    let n = arr.length;
    let l=0;
    let r=n-1;
    let areamax = 0;
    
    while(l<r){
        let area = (Math.min(arr[l], arr[r])) * (r-l)
        areamax = Math.max(area,areamax);
        
        if(arr[l] < arr[r]){
            l++;
        } else {
            r--;
        }
    }
    
    return areamax;
}

const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height))
