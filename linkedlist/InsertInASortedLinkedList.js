const InsertInASortedLinkedList = (head, target) => {
  let temp = new Node(target);
  if (!head) {
    return temp;
  }
  
  let curr = head;
  
  // Case when the target value is smaller than the first node
  if (target < head.data) {
    temp.next = head;
    return temp;
  }

  while (curr.next && curr.next.data <= target) {
    curr = curr.next;
  }

  // Insert the new node after curr
  temp.next = curr.next;
  curr.next = temp;

  return head;
}
