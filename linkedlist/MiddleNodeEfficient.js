const MiddleNodeofLinkedlist = (head) => {
  if (!head) return;
  let fast = head;
  let slow = head;

  while (slow && fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (!fast || !fast.next) {
      return slow.data;
    }
  }
}
