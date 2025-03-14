function solution(m, musicinfos) {
    
    m = m.replace(/[A-Z]#/g, a => a[0].toLowerCase());
    
    const info = musicinfos
    .map((v) => {
        let [start, end, name, melody] = v.split(",");
        let time = (new Date(`1997-01-01 ${end}:00`) - new Date(`1997-01-01 ${start}:00`)) / 60000;
        melody = melody.replace(/[A-Z]#/g, a => a[0].toLowerCase());
        melody = melody.repeat(Math.ceil(time / melody.length)).substring(0, time)
        return [name, melody, time];
    })
    const answer = info
        .filter((v) => v[1].includes(m))
        .sort((a,b) => b[2] - a[2])
    
    return answer.length === 0 ? "(None)" : answer[0][0]
}
