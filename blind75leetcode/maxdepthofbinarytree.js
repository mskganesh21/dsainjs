const maximumDepthofBinaryTree = (root) => {
  if(root === null) return 0;
  
  return 1+ Math.max(maximumDepthofBinaryTree(root.left), maximumDepthofBinaryTree(root.right));
}
