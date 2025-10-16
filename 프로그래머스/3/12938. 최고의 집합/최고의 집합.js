function solution(n, s) {
    let result = [];
    while(n > 0) {
        const num = Math.floor(s / n);
        result.push(num);
        s -= num;
        n--;
    }
    return result.indexOf(0) === -1 ? result : [-1];
}
