function solution(k, score) {
    const arr = [];
    return score.reduce((acc, cur) => {
        arr.push(cur);
        arr.sort((a,b) => a - b);
        if(arr.length > k) arr.shift();
        acc.push(arr[0])
        return acc;
    }, [])
}