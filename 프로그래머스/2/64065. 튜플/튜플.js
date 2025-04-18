function solution(s) {
    s = s.slice(1, s.length - 1);
    const strArr = s.match(/({[\d,]+})/g);
    
    const arr = strArr.map((e) => e.slice(1, e.length - 1).split(","));
    arr.sort((a,b) => a.length - b.length);
    return arr.reduce((acc, cur) => [...acc, ...cur.filter((c) => !acc.includes(c))], []).map(Number)
}