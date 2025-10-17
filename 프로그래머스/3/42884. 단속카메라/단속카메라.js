function solution(routes) {
    routes.sort((a,b) => a[0] - b[0]);
    let camera = routes[0][1];
    let answer = 1;
    for(let route of routes) {
        if(camera < route[0]) {
            answer++;
            camera = route[1];
        }
        if(camera > route[1]) {
            camera = route[1];
        }
    }
    return answer;
}