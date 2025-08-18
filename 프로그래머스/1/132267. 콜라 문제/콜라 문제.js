function solution(a, b, n) {
    let answer = 0;
    while(n >= a) {
        const bottles = Math.floor(n / a) * b;
        answer += bottles;
        n = bottles + n % a;
    }
    return answer;
}