/*
LINKED LIST REVERSAL

n1 = {val: 1, next: n2}
n2 = {val: 2, next: n3}
n3 = {val: 3, next: n4}
n4 = {val: 4, next: null}

n1.next = n2;
n1.next.next = n3;

present node = current


*/


const reverseList = (head) => {
  let previous = null;
  let current = head;
  while(current){
    const next = current.next;
    current.next = previous;
    previous = current;
    current=next;
  }
  return previous
}





