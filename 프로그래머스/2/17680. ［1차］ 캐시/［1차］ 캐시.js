function solution(cacheSize, cities) {
    let runtime = 0;
    let cache = [];
    if(!cacheSize) return cities.length * 5; 
    for(let city of cities) {
        city = city.toUpperCase();
        if(cache.indexOf(city) !== -1) {
            runtime += 1;
            let idx = cache.indexOf(city);
            cache.push(...cache.splice(idx,1));
        } else {
            runtime += 5;
            if(cache.length === cacheSize) cache.shift();
            cache.push(city);
        }
    }
    
    return runtime;
}