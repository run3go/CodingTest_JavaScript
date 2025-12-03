class Queue {
    items = [];
    front = 0;
    rear = 0;
    
    push(item) {
        this.items.push(item);
        this.rear++;
    }
    
    pop() {
        return this.items[this.front++];
    }
    
    isEmpty() {
        return this.front === this.rear;
    }
}

function solution(info, edges) {
    let answer = 1;
    const i = info.length;
    const edge = {};
    const q = new Queue();
    
    for(let i = 0; i < info.length; i++) {
        edge[i] = [];
    }
    
    for(const [s, e] of edges) {
        edge[s].push(e);
    }
    
    q.push([1, 0, 0, new Set()]);
    
    while(!q.isEmpty()) {
        let [sheep, wolves, node, visited] = q.pop();
        answer = Math.max(answer, sheep);
        console.log(visited)
        for(const next of edge[node]) {
            visited.add(next);
        }
        
        for(const next of visited) {
            if(info[next]) {
                if (sheep !== wolves + 1) {
                    const newVisited = new Set(visited);
                    newVisited.delete(next);
                    q.push([sheep, wolves + 1, next, newVisited]);
                }
            } else {
                const newVisited = new Set(visited);
                newVisited.delete(next);
                q.push([sheep + 1, wolves, next, newVisited]);
            }
        }
    }
    return answer;
}

//bfs 큐에 양과 늑대의 숫자를 담아서 [2, 0, ]