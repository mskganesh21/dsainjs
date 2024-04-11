console.log("Hello, World!");

class Node{
  constructor(val){
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right= f;


//depth first algorithm 
// tc: o(n) and sc: o(n)

const depthFirstValues = (root) => {
  
  if(!root){
    return [];
  }
  
  const result = [];
  
  /*
  when considering array as stack you can use only push and pop only
  */
  
  const stack = [root];
  while(stack.length > 0){
    const current = stack.pop();
    // console.log(current.val);
    result.push(current.val);

          if(current.right){
      stack.push(current.right)
    }    
    if(current.left){
      stack.push(current.left)
    }

  }
  
  return result;
}


console.log(depthFirstValues(a));
  
  
const depthFirstValuesRecursion = (root) => {
  if(!root) return [];
  
const leftValues = depthFirstValuesRecursion(root.left);
const rightValues = depthFirstValuesRecursion(root.right);
  
  return [root.val, ...leftValues, ...rightValues];
}  

console.log(depthFirstValuesRecursion(a));  


/*
Breadth first values
*/

const breadthFirstValues = (root) => {
  //queue
  if(!root) return [];
  const queue = [root];
  const values = [];
  while(queue.length > 0){
    const current =  queue.shift();
    values.push(current.val);
    if(current.left){
      queue.push(current.left)
    }
    if(current.right){
      queue.push(current.right)
    }
  }
  
  return values
}

console.log(breadthFirstValues(a));

const TreeIncludes = (root, target) => {
  if (!root) return false;
    const queue = [root];
    while(queue.length > 0){
      const current = queue.shift();
      if(current.val === target) return true;
      
      if(current.left){
        queue.push(current.left)
      }
            if(current.right){
        queue.push(current.right)
      }
    }
    
    return false;
}


console.log(TreeIncludes(a,'j'));


const TreeIncludesDepth = (root, target) => {
  if(!root) return false;
  if(root.val === target) return true;
  return TreeIncludesDepth(root.left,target) || TreeIncludesDepth(root.right,target);
}


const TreeSum = (root) => {
  if(!root) return 0;
  const queue = [root]
  let sum = 0;
  while(queue.length > 0){
    const current = queue.shift();
    sum = sum + current.val;
        if(current.left){
      queue.push(current.left)
    }
    if(current.right){
      queue.push(current.right)
    }
  }
  
  return sum;
}

const z = new Node(3);
const y = new Node(11);
const x = new Node(4);
const w = new Node(4);
const u = new Node(2);
const v = new Node(1);


z.left = y;
z.right = x;
y.left = w;
y.right = u;
x.right = v;

const result = TreeSum(z);
console.log(result);


const TreeSumRecursively = (root) => {
  if(!root) return 0;
   
  return root.val + TreeSumRecursively(root.left) + TreeSumRecursively(root.right);
  
}

console.log(TreeSumRecursively(z));


const TreeMinimum = (root) => {
  let minimum = Infinity;
  if(!root) return 0;
  const queue = [root];
  while(queue.length > 0){
    const current = queue.shift();
    if(current.val < minimum){
      minimum = current.val
    }
    
    if(current.left){
      queue.push(current.left)
    }
        if(current.right){
      queue.push(current.right)
    }
  }
  
  return minimum;
}

console.log(TreeMinimum(z));


const TreeMinimumRecursive = (root) => {
  if(!root) return Infinity;
  
  const leftmin = TreeMinimumRecursive(root.left);
  const rightmin = TreeMinimumRecursive(root.right);
  
  return Math.min(root.val,leftmin,rightmin);
}


console.log(TreeMinimumRecursive(z));




const MaxRootToLeafPath = (root) => {
  if(!root) return 0;
  
  const left = MaxRootToLeafPath(root.left);
  const right = MaxRootToLeafPath(root.right);
  
  return root.val + Math.max(left,right);
}

console.log(MaxRootToLeafPath(z));


const p = new Node(5);
const q = new Node(11);
const r = new Node(3);
const s = new Node(4);
const t = new Node(2);
const uv = new Node(1);

p.left = q;
p.right = r;
q.left = s;
q.right = t;
r.right = uv;


console.log(MaxRootToLeafPath(p));


const MaxRootToLeafPathRecursively = (root) => {
  
if(root.left === null && root.right === null) return root.val;
if(!root) return -Infinity;
const maxChild =  Math.max(MaxRootToLeafPathRecursively(root.left),
MaxRootToLeafPathRecursively(root.right))
  return root.val + maxChild;
}
  
  
console.log()  
  
  
