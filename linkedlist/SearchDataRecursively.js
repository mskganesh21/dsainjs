const SearchInALinkedListRecursively = (head, target, count = 1) => {
  if (!head) return -1;
  if (head.data === target) return count;
  return SearchInALinkedListRecursively(head.next, target, ++count); 
}
