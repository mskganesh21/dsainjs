class Node {
  constructor(x){
    this.data = x;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(60);
root.left.left = new Node(25);
root.left.right = new Node(35);

const InOrderTraversal = (root) => {
  if(!root) return;
   InOrderTraversal(root.left);
  console.log(root.data);
   InOrderTraversal(root.right);
}

console.log("InOrderTraversal");

InOrderTraversal(root);

console.log("PreOrderTraversal below")

const PreOrderTraversal = (root) => {
  if(!root) return;
  console.log(root.data);
  PreOrderTraversal(root.left);
  PreOrderTraversal(root.right);
}

PreOrderTraversal(root);

const PostOrderTraversal = (root) => {
  if(!root) return;
  PostOrderTraversal(root.left);
  PostOrderTraversal(root.right);
  console.log(root.data);
}

console.log("PostOrderTraversal");

PostOrderTraversal(root);
