function solution(n, t, m, timetable) {
    let answer = ''
    let curTime = 540;
    var count = 0;
    
    timetable = timetable.map((t) => {
        const [hh, mm] = t.split(":").map(Number);
        return hh * 60 + mm;
    })
    
    timetable.sort((a, b) => a - b);
    
    for(let i = 1; i <= n; i++) {
        count = timetable.filter((data) => data <= curTime).length;
        if(i === n) {
            if(count >= m) curTime = timetable[m - 1] - 1;
        } else {
            timetable.splice(0, count > m ? m : count);
            curTime += t;
            count = 0;
        }
    }
    
    const hour = Math.floor(curTime / 60);
    const minutes = curTime % 60
    
    return (hour >= 10 ? "" + hour : "0" + hour) + ":" + (minutes >= 10 ? "" + minutes : "0" + minutes);
}
    
            