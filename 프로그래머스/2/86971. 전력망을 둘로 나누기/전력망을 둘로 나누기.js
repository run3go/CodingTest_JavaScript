function solution(n, wires) {
    const graph = Array.from({length: n + 1}, () => []);
    for(const [a, b] of wires) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    function dfs(node, parent) {
        let cnt = 1;
        for(const child of graph[node]) {
            if(child !== parent) {
                cnt += dfs(child, node);
            }
        }
        return cnt;
    }
    
    let minDiff = Infinity;
    
    for(const [a, b] of wires) {
        graph[a].splice(graph[a].indexOf(b), 1);
        graph[b].splice(graph[b].indexOf(a), 1);
        
        const cntA = dfs(a, b);
        const cntB = n - cntA;
        
        graph[a].push(b);
        graph[b].push(a);
        
        minDiff = Math.min(minDiff, Math.abs(cntA - cntB));
    }
    
    return minDiff;
}

//wires 배열을 순회하며 전선을 하나씩 끊은 모든 경우의 수를 확인한다.
//깊이 우선 탐색을 통해, 전력망a의 송전탑 개수를 얻는다.
//전체 송전탑 - 2 * a 송전탑 = result