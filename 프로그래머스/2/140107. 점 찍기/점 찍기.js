function solution(k, d) {
    let answer = 0;
    for(let i = 0; i <= d; i += k) {
        const maxY = Math.floor(Math.sqrt(d * d - i * i));
        answer += Math.floor(maxY / k) + 1;
    }
    return answer;
}