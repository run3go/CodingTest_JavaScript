const factorial = (number) => {
    if(number <= 1) return 1;
    return number * factorial(number - 1);
}

function solution(n, k) {
    const numbers = Array.from({length: n}, (_, i) => i + 1);
    const result = [];
    k--;
    
    for(let i = n; i > 0; i--) {
        const fact = factorial(i - 1);
        const index = Math.floor(k / fact);
        result.push(numbers[index]);
        numbers.splice(index, 1)
        k %= fact
    }
    
    return result
}