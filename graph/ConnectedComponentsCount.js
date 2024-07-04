const graph = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1],
};

const ConnectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();
  
  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count++;
    }
  }
  return count;
}

const explore = (graph, curr, visited) => {
  if (visited.has(String(curr))) return false;
  
  visited.add(String(curr));
  
  for (let neighbor of graph[curr]) {
    explore(graph, String(neighbor), visited);
  }
  
  return true;
}

console.log(ConnectedComponentsCount(graph)); // Output should be 3
