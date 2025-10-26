function solution(a) {
    const len = a.length;
    const left = new Array(len);
    const right = new Array(len);
    
    left[0] = a[0];
    right[len - 1] = a[len - 1];
    
    for(let i = 1; i < len; i++) {
        left[i] = Math.min(left[i - 1], a[i]);
    }
    
    for(let i = len - 2; i >= 0; i--) {
        right[i] = Math.min(right[i + 1], a[i]);
    }
    
    return new Set([...left, ...right]).size;
}
