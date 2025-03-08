function solution(players, m, k) {
    let answer = 0;
    const serverArray = Array(24).fill(0)
    for(let i = 0; i < players.length; i++) {
        if(Math.floor(players[i] / m) > serverArray[i]) {
            const needServer = Math.floor(players[i] / m) - serverArray[i];
            for(let j = 0; j < k; j++) {
                serverArray[i + j] += needServer;
            }
            answer += needServer;
        }
    }
    return answer;
}

// 현재 이용자 수 : users
// 증설 필요 서버 갯수 : users / m
// m명 미만이면 x
// 한번 증설되면 k 시간동안 운영


//1. 배열을 순회
//