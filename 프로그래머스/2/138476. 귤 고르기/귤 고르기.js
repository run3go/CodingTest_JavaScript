function solution(k, tangerine) {
    let i = 0;
    let sum = 0;
    let map = new Map();
    for(let x of tangerine) {
        map.set(x, (map.get(x) || 0) + 1);
    }
    let arr = [...map.values()].sort((a,b) => b - a);
    for(i; i < arr.length; i++) {
        sum += arr[i];
        if(sum >= k) break;
    }
    return i+1;
}