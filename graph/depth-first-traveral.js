// Depth-first reversal
const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// iterative
const depthFirstReversal = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

// recursive
// const depthFirstReversal = (graph, source) => {
//   console.log(source);

//   for (const neighbor of graph[source]) {
//     depthFirstReversal(graph, neighbor);
//   }
// };

depthFirstReversal(graph, "a"); // starting node: "a" result: a,b,d,f,c,e
