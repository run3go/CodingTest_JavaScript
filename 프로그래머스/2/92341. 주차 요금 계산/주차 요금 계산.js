function solution(fees, records) {
    let parking = new Map();
    let total = new Map();
    let ans = [];
    for (let record of records) {
        let cur = record.split(" ");
        let [hour, min] = cur[0].split(":").map(Number);
        let time = hour * 60 + min;
        if(cur[2] === 'IN') {
            parking.set(cur[1], time);
        } else {
            let parkingTime = time - parking.get(cur[1]);
            total.set(cur[1], (total.get(cur[1]) || 0) + parkingTime);
            parking.delete(cur[1]);
        }
    }
    for(let [num, time] of parking) {
        let max = 23 * 60 + 59;
        total.set(num, (total.get(num) || 0) + (max - time));
    }
    
    return [...total].sort()
    .map((el) => {
        if(el[1] <= fees[0]) {
            return fees[1];
        } else {
            return Math.ceil((el[1] - fees[0]) / fees[2]) * fees[3] + fees[1]; 
        }
    })
}