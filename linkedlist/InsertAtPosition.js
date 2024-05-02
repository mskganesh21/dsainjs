const InsertAtPosition = (head, n, data) => {
  let temp = new Node(data);
  
  if (n === 1) {
    temp.next = head;
    return temp;
  }
  
  let curr = head;
  
  for (let i = 1; i <= n - 2 && curr !== null; i++) {
    curr = curr.next;
    if (curr === null) return head;
  }
  
  if (curr === null) return head;
  
  temp.next = curr.next;
  curr.next = temp;
  
  return head;
}
