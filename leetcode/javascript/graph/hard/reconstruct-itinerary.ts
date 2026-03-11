function findItinerary(tickets: string[][]): string[] {
  const graph: Record<string, string[]> = {};
  for (const [from, to] of tickets) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  }
  for (const from in graph) {
    graph[from].sort((a, b) => a.localeCompare(b));
  }
  const result: string[] = [];
  function dfs(node: string) {
    while (graph[node] && graph[node].length > 0) {
      const next = graph[node].shift()!;
      dfs(next);
    }
    result.push(node);
  }
  dfs("JFK");
  return result.reverse();
}
