const LargestComponentSize = (graph) => {
  let maxSize = 0;
  let visited = new Set();

  for (let node in graph) {
    node = Number(node);  // Ensure node is treated as a number
    if (!visited.has(node)) {
      let size = exploreSize(graph, node, visited);
      console.log(`Component size for node ${node}: ${size}`);
      if (size > maxSize) {
        maxSize = size;
      }
    }
  }

  return maxSize;
}

const exploreSize = (graph, curr, visited) => {
  if (visited.has(curr)) return 0;

  console.log(`Visiting node ${curr}`);
  visited.add(curr);
  let size = 1;

  for (let neighbor of graph[curr]) {
    size += exploreSize(graph, neighbor, visited);
  }

  return size;
}

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
};

console.log(LargestComponentSize(graph)); // Output should be 4
