function isIsomorphic(s: string, t: string): boolean {
    let visited = {};
    for (let i = 0; i < s.length; i++) {
        if (!visited.hasOwnProperty(s[i]) && !Object.values(visited).includes(t[i])) {
            visited[s[i]] = t[i];
        } else if (visited[s[i]] == t[i]) {

        } else {
            return false;
        }
    }
    return true;
}