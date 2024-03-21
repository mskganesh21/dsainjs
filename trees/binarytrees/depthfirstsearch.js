/*
every tree has nodes
parent child relationship
root is the node which has no parent
leaf nodes have no children

binary tree
every node has max 2 children
exactly 1 root
exactly 1 path b/w root and any node

*/

class Node {
    constructor(value){
      this.value = value;
      this.left = null;
      this.right=null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');


a.left = b;
a.right =c;
b.left = d;
b.right =e;
c.right =f;

/*
            a
            
        b        c
        
        
    d      e          f    
*/


/*
DEPTH FIRST SEARCH

values: a,b,d,e,c,f
*/

const depthFirstValues = (root) => {
  if(root === null){
    return []
  }
  const stack = [root];
  
  const result = []
  while(stack.length > 0){
    const current = stack.pop();
    console.log(current.value);
    result.push(current.value);
    if(current.right){
      stack.push(current.right)
    }
    if(current.left){
      stack.push(current.left)
    }
    
  }
  return result
}

const results = depthFirstValues(a);
console.log(results)
