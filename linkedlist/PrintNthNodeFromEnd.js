const PrintNthNodeFromEndofLinkedList = (head, n) => {
  if (!head) return;

  let slow = head;
  let fast = head;

  // Move fast pointer n steps ahead
  for (let i = 0; i < n; i++) {
    if (!fast) return; // List has fewer than n nodes
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // Slow pointer is now at the nth node from the end
  return slow.data;
}
