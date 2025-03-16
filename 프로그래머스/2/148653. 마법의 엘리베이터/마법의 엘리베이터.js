function solution(storey) { 
    let answer = 0;
    while(storey > 0) {
        let num = storey % 10;
        if(num > 5) {
            let times = 10 - num;
            answer += times;
            storey += times;
        }
        else if(num < 5) {
            answer += num;
        }
        else {
            answer += num;
            if(Math.floor(storey % 100 / 10) >= 5) storey += num;
        }
        storey = Math.floor(storey / 10);
    }
    return answer;
    
}