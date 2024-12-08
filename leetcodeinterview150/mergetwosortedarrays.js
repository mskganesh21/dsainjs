var merge = function(nums1, m, nums2, n) {
   //code using 3 pointers technique

   let p1=m-1;
   let p2=n-1;
   let p3=m+n-1;

   while(p1 >=0 && p2 >=0){
        //compare the elements
        let num1 = nums1[p1];
        let num2 = nums2[p2];

        //greater
        if(num1 >= num2){
            nums1[p3] = num1;
            p1--;
        } else {
            nums1[p3] = num2;
            p2--;
        }
        p3--;
   }

   //leftover elements in nums2
   while(p2 >=0){
    nums1[p3] = nums2[p2];
    p2--;
    p3--;
   } 
};
