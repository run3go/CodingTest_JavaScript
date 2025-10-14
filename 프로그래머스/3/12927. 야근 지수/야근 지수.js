function solution(n, works) {
    works.sort((a,b) => b - a);
    
    while(n) {
        const max = works[0] - 1;
        
        for(let i = 0; i < works.length; i++) {
            if(max < works[i]) {
                works[i]--;
                n--;
            }
            if(n === 0) break;
        }
    }
    if(works[0] < 0) return 0;
    return works.reduce((acc, cur) => acc + Math.pow(cur, 2), 0)
}

