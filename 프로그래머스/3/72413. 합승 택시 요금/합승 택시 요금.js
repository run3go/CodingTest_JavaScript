class MinHeap {
    constructor() {
        this.items = [];
    }
    
    size() {
        return this.items.length;
    }
    
    insert(item) {
        this.items.push(item);
        this.bubbleUp();
    }
    
    pop() {
        if(this.size === 0) {
            return null;
        }
        const min = this.items[0];
        this.items[0] = this.items[this.size() - 1];
        this.items.pop();
        this.bubbleDown();
        return min;
    }
    
    swap(a, b) {
        [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
    }
    
    bubbleUp() {
        let index = this.items[this.size() - 1];
        while(index > 0) {
            const parentIdx = Math.floor((index - 1) / 2);
            if(this.items[parentIdx] <= this.items[index]) {
                break;
            }
            this.swap(index, parentIdx);
            index = parentIdx;
        }
    }
    
    bubbleDown() {
        let index = 0;
        while(index * 2 + 1 < this.size()) {
            const leftChild = index * 2 + 1;
            const rightChild = index * 2 + 2;
            let smallerChild = rightChild < this.size() &&
                rightChild < leftChild
                ? rightChild
                : leftChild;
            if(this.items[smallerChild] >= this.items[index]) {
                break;
            }
            this.swap(smallerChild, index);
            index = smallerChild;
        }
    }
}

function search (graph, dist, start) {
    const heap = new MinHeap();
    heap.insert([start, 0]);
    dist[start] = 0;
    
    while(heap.size() > 0) {
        const [node, cost] = heap.pop();
        for(const [newNode, newCost] of graph[node]) {
            const sumCost = cost + newCost;
            if(sumCost < dist[newNode]) {
                dist[newNode] = sumCost;
                heap.insert([newNode, sumCost]);
            } 
        }
    }
} 

function solution(n, s, a, b, fares) {
    const graph = Array.from({length: n + 1}, () => []);
    
    for(const [x, y, cost] of fares) {
        graph[x].push([y, cost]);
        graph[y].push([x, cost]);
    }
    
    const distS = new Array(n + 1).fill(Infinity);
    const distA = new Array(n + 1).fill(Infinity);
    const distB = new Array(n + 1).fill(Infinity);
    
    search(graph, distS, s);
    search(graph, distA, a);
    search(graph, distB, b);
    
    let answer = distS[a] + distS[b];
    
    for(let i = 1; i <= n; i++) {
        const minCost = distS[i] + distA[i] + distB[i];
        answer = Math.min(minCost, answer);
    }
    
    return answer;
}