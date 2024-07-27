function allPathsSourceTarget(graph: number[][]): number[][] {
    let ans: number[][] = [];
    const n: number = graph.length;

    const dfs = (curr: number, list: number[]): void => {
        if (curr === n - 1) {
            ans.push(list);
            return;
        }

        for (let i = 0; i < graph[curr].length; i++) {
            dfs(graph[curr][i], [...list, graph[curr][i]]);
        }
    }
    dfs(0, [0]);

    return ans;
};