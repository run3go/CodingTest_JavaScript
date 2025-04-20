function solution(citations) {
    citations.sort((a,b) => b-a);
    for(let i = citations[0]; i >= 0; i--) {
        let temp = 0;
        for(let j = 0; j < citations.length; j++) {
            if(citations[j] >= i) {
                temp++;
            }
        }
        if(temp >= i) return i;
    }
}