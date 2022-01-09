const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

// Depth First
// const hasPath = (graph, src, des) => {
//   if (src === des) return true;

//   for (const neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, des) === true) {
//       return true;
//     }
//   }

//   return false;
// };

// Breadth first
const hasPath = (graph, src, des) => {
  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === des) return true;
    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

console.log(hasPath(graph, "f", "h"));
