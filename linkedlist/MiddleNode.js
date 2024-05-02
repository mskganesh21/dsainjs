const MiddleNodeofLinkedlist = (head) => {
  if (!head) return;
  let curr = head;
  let count = 0;
  
  while (curr) {
    curr = curr.next;
    count++;
  }
  
  let middle = Math.floor(count / 2);
  let curr1 = head;
  
  for (let i = 1; i <= middle; i++) {
    if (i === middle) {
      return curr1.data;
    } else {
      curr1 = curr1.next;
    }
  }
}
