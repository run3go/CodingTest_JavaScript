function solution(operations) {
    const minHeap = [];
    const maxHeap = [];
    
    for(let op of operations) {
        const [cmd, n] = op.split(" ");
        const num = Number(n);
        if(cmd === 'I') {
            minHeap.push(num);
            maxHeap.push(num);
        } else if(num === 1) {
            const max = Math.max(...maxHeap);
            minHeap.splice(minHeap.indexOf(max), 1);
            maxHeap.splice(maxHeap.indexOf(max), 1);
        } else {
            const min = Math.min(...minHeap);
            minHeap.splice(minHeap.indexOf(min), 1);
            maxHeap.splice(maxHeap.indexOf(min), 1);
        }
    }
    
    if(maxHeap.length === 0) return [0,0];
    
    return [Math.max(...maxHeap), Math.min(...minHeap)]
}