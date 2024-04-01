/*
LINKED LIST

made up of many nodes
each node contains data

last.next = null
last node is tail
first node is head
 
*/

/*
always pass reference to head 

current node 
current.next

*/

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}


const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(7);


a.next = b;
b.next =c;
c.next=d; 


//A -> B -> C -> D -> NULL

const printLinkedList = (head) => {
  let current = head;
  while(current !== null){
    console.log(current.val);
    current = current.next;
  }
}

printLinkedList(a);


const printLinkedListRecursively = (head) => {
  if(head === null){
    return
  }
  console.log(head.val);
  printLinkedListRecursively(head.next);
}

printLinkedListRecursively(a);


// linked list values push in array

const linkedListValues = (head) => {
  const values = [];
  fillValues(head,values);
  return values
}

const fillValues = (head,values) => {
  if(head === null) return 
  values.push(head.val);
  fillValues(head.next, values);
}

console.log(linkedListValues(a));


const sumofNodes = (head) => {
  let sum = 0;
  let current = head;
  while(current){
    sum += current.val;
    current = current.next
  }
  return sum;
}

console.log(sumofNodes(a))

const sumofNodesRecursively = (head) => {
  if(!head) return 0;
  return head.val + sumofNodesRecursively(head.next);
}

console.log(sumofNodesRecursively(a))


/*
LINKED LIST FIND PROBLEM
*/

const findNode = (head,target) => {
  let current = head;
  while(current){
    if(current.val === target) return true;
    current = current.next
  }
  
  return false
}


console.log(findNode(a,7))


const findNodeRecursively = (head,target) => {
  if(!head) return false;
  if(head.val === target) return true;
  
  return findNodeRecursively(head.next,target);
}

console.log(findNodeRecursively(a,7))


const findNodeAtIndex = (head,index) => {
  let count = 0;
  let current = head;
  
  while(current){
    if(count === index ) return current.val;
    current = current.next;
    count += 1;
  }
  return null
}

console.log(findNodeAtIndex(a,0));


const findNodeAtIndexRecursively = (head,index) => {
  if(!head) return null;
  if(index === 0) return head.val;
  return findNodeAtIndexRecursively(head.next,index -1);
}

console.log(findNodeAtIndexRecursively(a,3))
