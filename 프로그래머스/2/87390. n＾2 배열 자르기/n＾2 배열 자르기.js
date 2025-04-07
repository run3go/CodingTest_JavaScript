function solution(n, left, right) {
    let arr = [];
    for(let i = left; i <= right; i++) {
        arr.push(Math.max(Math.floor(i / n), i % n) + 1);
    }
    return arr;
}