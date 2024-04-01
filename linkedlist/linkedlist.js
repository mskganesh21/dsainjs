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


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');


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





