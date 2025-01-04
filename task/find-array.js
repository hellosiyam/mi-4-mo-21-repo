function find(numbers) {
    const emty = [];
    const emty2 = [];
    for(num of numbers){
        if (num === 5) {
           emty.push(num); 
        }
        else if (num === 25) {
            emty2.push(num)
        }
    }
    return 'emty1= '+emty.length+' emty2= '+emty2.length
}
const result = find([5, 5,5,10, 150, 12, 25, 678 ,69])
console.log(result);

