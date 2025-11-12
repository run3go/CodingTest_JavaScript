function solution(genres, plays) {
    const answer = [];
    const genObj = {};
    const playsObj = {};
    
    for(let i = 0; i < plays.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        
        if(!(genre in genObj)) {
            genObj[genre] = [];
            playsObj[genre] = 0;
        }
        
        playsObj[genre] += play;
        genObj[genre].push([i, play]);
    }
    
    const sortedGenres = Object.keys(playsObj).sort((a,b) => playsObj[b] - playsObj[a]);
    
    for(const genre of sortedGenres) {
        const sortedSongs = genObj[genre].sort((a,b) => {
            return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]; 
        })
        answer.push(...sortedSongs.slice(0,2).map((song) => song[0]));
    }
    return answer;
}

//1. 장르별 재생 횟수를 담는다.
//2. 각 노래별 재생 횟수를 담는다.
//3. 