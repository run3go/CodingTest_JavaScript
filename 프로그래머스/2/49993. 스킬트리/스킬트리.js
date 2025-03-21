function solution(skill, skill_trees) {
    let regex = new RegExp(`[^${skill}]`, 'g');
    
    return skill_trees
        .map((x) => x.replace(regex, ""))
        .filter((e) => skill.startsWith(e))
        .length
}