// function wordStr(params) {
//     let str = params.split(" ");
//     let count = [];
//     let wordLenth= 0;
//     for(const nam of str){
//         if (nam.length > wordLenth) {
//             wordLenth = nam.length;
//             count = nam;
//         }
//     }
//     console.log(wordLenth);
//     return count;
// }
// const result = wordStr("We learn the programing in the month")
// console.log('result :',result);

function findWord(params) {
    let findStr = params.split(" ")
    let count = [];
    let wordLenth = 0;
    for(let str of findStr){
        if (str.length > wordLenth) {
            wordLenth = str.length;
            count = wordLenth;
        }
    }
    console.log(wordLenth);
    return count;
}
const result = findWord("The Name of our country is Bangladesh");
console.log(result);


