function solution(n, roads, sources, destination) {
    const graph = new Array(n + 1).fill(null).map(() => [])
    
    for(let [a, b] of roads) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const dist = Array(n + 1).fill(Infinity);
    dist[destination] = 0;
    const queue = [[0, destination]];
    
    while(queue.length) {
        const [cost, current] = queue.shift();
        
        if(dist[current] < cost) continue;
        
        for(const next of graph[current]) {
            if(dist[next] > cost + 1) {
                dist[next] = cost + 1;
                queue.push([dist[next], next]);
            }
        }
    }
    
    return sources.map((s) => dist[s] === Infinity ? -1 : dist[s])
}