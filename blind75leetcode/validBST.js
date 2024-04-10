/*
BINARY SEARCH TREE
given a tree 
if the left node value is less than right node then it is valid binary search tree


option 1 
in order traversal 
left to root to right 

do this recursively
if no root or null then return true
if root <= left || root >= right then return false

*/

const isBST = (root) => {
 return recurse(root,-Inifinity,Infinity);
}

const recurse = (root,min,max) => {
  if(root === null) return true;
  
  if((root.val >= max || root.val <= min )){
    return false;
  }
  
  return recurse(root.left,min,root.val); && recurse(root.right,root.val,max);
}






