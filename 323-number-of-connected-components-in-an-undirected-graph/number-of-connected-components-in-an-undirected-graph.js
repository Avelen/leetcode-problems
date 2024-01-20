/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function buildGraph(edges, n, graph = {}) {
    for(let i = 0; i < n; i++) { graph[i] = [] }
    while (edges.length) {
        let curr = edges.shift();
        graph[curr[0]].push(curr[1]);
        graph[curr[1]].push(curr[0]);
    }
    return graph;
}

function dfs (graph, node, visited) {
    if (visited[node]) return false;

    visited[node] = true;

    for (let nextNode of graph[node]) {
        dfs(graph, nextNode, visited);
    }

    return true;
}

var countComponents = function (n, edges) {
    let graph = buildGraph(edges, n);
    let connections = 0;
    let visited = {};

    for (let node in graph) {
        if (dfs(graph, node, visited)) ++connections;
    }

    return connections;
};