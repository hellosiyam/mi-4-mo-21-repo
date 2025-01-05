function getCount(str) {
    let count = 0;
    const vowel = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]
    for(const chr of str){
        if (vowel.includes(chr)) {
            count++
        }
    }
    return count
}
const result = getCount("AcEiorUOIao")
console.log(result);

