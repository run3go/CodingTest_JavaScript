class MinHeap {
    constructor () {
        this.heap = [];
    }
    
    root() {
        return this.heap[0];
    }
    
    size() {
        return this.heap.length;
    }
    
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    add(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    pop() {
        this.swap(0, this.size() - 1);
        const value = this.heap.pop();
        this.bubbleDown();
        return value;
    }
    
    bubbleUp() {
        let index = this.size() - 1
        let parentIndex = Math.floor((index - 1) / 2);
        while(this.heap[parentIndex] && this.heap[index] < this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }
    
    bubbleDown() {
        let index = 0;
        
        while(true) {
            let leftChild = index * 2 + 1;
            let rightChild = index * 2 + 2;
            let smaller = index;
            
            if(leftChild < this.size() && this.heap[leftChild] < this.heap[smaller]) {
                smaller = leftChild;
            }
            
            if(rightChild < this.size() && this.heap[rightChild] < this.heap[smaller]) {
                smaller = rightChild;
            }
            
            if(smaller === index) break;
            
            this.swap(index, smaller);
            index = smaller
        }
    }
}

function solution(scoville, K) {
    let answer = 0;
   const heap = new MinHeap();
    scoville.forEach((s) => {
        heap.add(s);
    })
   while(heap.size() > 1 && heap.root() < K) {
       const prev1 = heap.pop();
       const prev2 = heap.pop();
       const newFood = prev1 + (prev2 * 2);
       heap.add(newFood);
       answer++;
   }
    return heap.root() < K ? -1 : answer;
}