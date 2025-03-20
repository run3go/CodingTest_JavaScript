function solution(n, k) {
    
    function isPrime(num) {
        if(num === '1' || !num) return false;
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) return false;
        }
        return true;
    }
    
    let num = n.toString(k);
    
    return num.split("0").filter((el) => isPrime(el)).length;

}