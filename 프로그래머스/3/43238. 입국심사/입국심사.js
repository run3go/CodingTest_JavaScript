function solution(n, times) {
    times.sort((a,b) => b - a);
    let start = 1;
    let end = times[0] * n;
    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
        const sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
        if(sum >= n) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
}
