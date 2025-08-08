function solution(arrayA, arrayB) {
    let answer = 0;
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    let gcdA = arrayA[0];
    let gcdB = arrayB[0];
    
    for(let i = 1; i < arrayA.length; i++) {
        gcdA = gcd(Math.max(gcdA, arrayA[i]), Math.min(gcdA, arrayA[i]));
        gcdB = gcd(Math.max(gcdB, arrayB[i]), Math.min(gcdB, arrayB[i]));
    }
    
    if (arrayA.every((v) => v % gcdB !== 0)) answer = Math.max(answer, gcdB);
    if (arrayB.every((v) => v % gcdA !== 0)) answer = Math.max(answer, gcdA);
    
    return answer;
}