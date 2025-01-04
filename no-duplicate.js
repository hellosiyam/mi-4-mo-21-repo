function duplicate(names) {
    const unique = [];
    for(const nam of names){
        if (unique.includes(nam) === false) {
            unique.push(nam)
        }
    }
    return unique;
}
const result = duplicate([10, 12, 15, 10, 16, 10, 12, 15, 10, 16])
console.log(result);


