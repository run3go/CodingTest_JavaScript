
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
function solution(s) {
    let result = 1001;
    for(let i = 1; i <= s.length; i++) {
        let answer = "";
        let target = s.slice(0, i);
        let cnt = 1;
        let idx = i;
        while(idx < s.length) {
            const current = s.slice(idx, idx + i);
            if(target !== current) {
                answer += `${cnt === 1 ? "" : cnt}${target}`;
                target = current;
                cnt = 1;
            } else {
                cnt++;
            }
            idx += i;
        }
        answer += `${cnt === 1 ? "" : cnt}${target}`;
        result = Math.min(result, answer.length);
    }
    return result;
}