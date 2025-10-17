function solution(n, stations, w) {
    let start = 1;
    let answer = 0;
    const range = w * 2 + 1
    
    for(let station of stations) {
        const gap = (station - w) - start;
        answer += Math.ceil(gap / range);
        start = station + w + 1;
    }
    
    if(start <= n) {
        const gap = (n + 1) - start;
        answer += Math.ceil(gap / range);
    }
    return answer;
}