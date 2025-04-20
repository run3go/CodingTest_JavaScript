function solution(citations) {
    citations.sort((a, b) => b - a);
    
    for(let h = citations[0]; h >= 0; h--) {
        const quoteCnt = citations.filter((cit) => cit >= h).length;
        if(quoteCnt >= h) return h;
    }
}