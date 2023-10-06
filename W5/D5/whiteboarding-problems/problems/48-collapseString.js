function collapseString(str) {
    let end = ''
    for(let i=0;i<str.length;i++) {
        if(str[i] === end[end.length-1]) continue
        end+=str[i]
    }
    return end
}

console.log(collapseString('apple')); // => 'aple'
console.log(collapseString('AAAaalviiiiin!!!')); // => 'Aalvin!'
console.log(collapseString('hello   app academy')); // => 'helo ap academy'

module.exports = collapseString