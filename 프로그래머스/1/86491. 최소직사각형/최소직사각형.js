function solution(sizes) {
    sizes = sizes.map((([a,b]) => a > b ? [b, a] : [a, b]));
    const maxSize = [0, 0];
    for(let [a, b] of sizes) {
        maxSize[0] = Math.max(a, maxSize[0]);
        maxSize[1] = Math.max(b, maxSize[1]);
    }
    return maxSize[0] * maxSize[1];
}