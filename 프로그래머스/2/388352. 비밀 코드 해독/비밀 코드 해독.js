function solution(n, q, ans) {
    const m = ans.length;
    let combs = [];
    const getCombination = (num, arr) => {
        if(arr.length === 5) {
            combs.push(arr);
            return;
        }
        for(let j = num; j <= n; j++) {
            getCombination(j + 1, [...arr, j]);
        }
    }
    getCombination(1, []);    
    
    for (let i = 0; i < m; i++) {
        combs = combs.filter((comb) => comb.filter((c) => q[i].includes(c)).length === ans[i]);
    }
    return combs.length;
}