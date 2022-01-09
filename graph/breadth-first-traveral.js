// Depth-first reversal
const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// iterative
const breadthFirstReversal = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

breadthFirstReversal(graph, "a"); // starting node: "a" result: a,c,b,e,d,f
