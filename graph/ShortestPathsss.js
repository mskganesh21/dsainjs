const BuildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [edge1, edge2] = edge;
    if (!(edge1 in graph)) graph[edge1] = [];
    if (!(edge2 in graph)) graph[edge2] = [];
    
    graph[edge1].push(edge2);
    graph[edge2].push(edge1);
  }
  return graph;
}

const ShortestPath = (edges, nodeA, nodeB) => {
  const graph = BuildGraph(edges);
  const visited = new Set([nodeA]);
  const queue = [[nodeA, 0]];
  
  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === nodeB) return distance;
    
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  
  return -1;
}

// Example usage:
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

const result = ShortestPath(edges, 'i', 'l');
console.log(result); // Output: 2
