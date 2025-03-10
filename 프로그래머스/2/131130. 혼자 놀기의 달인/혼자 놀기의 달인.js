function solution(cards) {
    const answer = [];
    cards.forEach((v, i) => {
        let idx = i;
        let count = 0;
        while(true) {
            if(cards[idx]) {
                const tmp = cards[idx];
                cards[idx] = 0;
                idx = tmp - 1;
                count++;
            } else {
                answer.push(count);
                break;
            }
        }
    })
    answer.sort((a,b) => b - a);
    return answer.length > 1 ? answer[0] * answer[1] : 0;
}