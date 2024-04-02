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

a.next =b;
b.next=c;
c.next=d;



const printLinkedList = (head) => {
  let current = head;
  while(current !== null){
    console.log(current.val);
    current = current.next;
  }
}

printLinkedList(a);



const linkedListReversal = (head) => {
  let prev = null;
  let current = head;
  while(current){
    const next = current.next;
    current.next=prev;
    prev = current;
    current=next;
  }
  return prev;
};

linkedListReversal(a);
printLinkedList(d);

const linkedListReversalRecursion = (head,prev=null) => {
  if(!head){
    return prev;
  }
  
  const next = head.next;
  head.next = prev;
  return linkedListReversalRecursion(next, head);
}

linkedListReversalRecursion(d);
printLinkedList(a);

