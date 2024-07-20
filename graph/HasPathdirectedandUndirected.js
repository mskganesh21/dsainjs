const HasPath = (graph,src,dst) => {
  if(src === dst) return true;
  
  for(let neighbor of graph[src]){
    let res =HasPath(graph,neighbor,dst);
    if(res === true) return true;
  }
  
  return false;
}


const edgeListToAdjacencyList = (edges) => {
  const graph = {};
  
  for (const [node1, node2] of edges) {
    if (!graph[node1]) {
      graph[node1] = [];
    }
    if (!graph[node2]) {
      graph[node2] = [];
    }
    graph[node1].push(node2);
    graph[node2].push(node1);
  }
  
  return graph;
};

const hasPathUndirected = (graph,src,dst,visited) => {
  if(visited.has(src)) return false;
  if(src === dst) return true;
  
  visited.add(src);
  for(let neighbor of graph[src]){
    let res = hasPathUndirected(graph,neighbor,dst,visited);
    if(res === true) return true;
  } 
  
  return false;
}


const BuildGraph = (edges) => {
  let graph = {};
  for(let edge of edges){
    const [node1,node2] = edge;
    if(!(node1 in graph)) graph[node1] = [];
    if(!(node2 in graph)) graph[node2] = [];
    graph[node1].push(node2);
    graph[node2].push(node1);
  }
  return graph;
}

const edges = [
  ['i','j'],
  ['k','i'],
  ['m','k'],
  ['k','l'],
  ['o','n'],
  ];
  
  console.log(BuildGraph(edges));


console.log(hasPathUndirected(BuildGraph(edges),'i','o',new Set()))























