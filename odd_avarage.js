function isEven(numbers) {
    const even = []; 
    for(const number of numbers){
        if (number % 2 === 0) {
            even.push(number);
        }
    }
    let total = 0;
    for(const num of even){
        total+=num;
    }
    console.log(total, even.length);
    
    return total / even.length
}
const avg = isEven([14, 16, 56, 15, 57, 11, 13]);
console.log(avg);

