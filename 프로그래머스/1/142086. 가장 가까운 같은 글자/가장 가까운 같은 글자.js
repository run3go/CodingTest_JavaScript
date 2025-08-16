function solution(s) { 
    return s.split("").map((e, i) => {
        let lastIdx = s.slice(0, i).lastIndexOf(e);
        return lastIdx < 0 ? lastIdx : i - lastIdx;
    })
}