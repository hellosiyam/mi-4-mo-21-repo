// function findString(str) {
//     const splitStr = str.split(" ");
//     let longestWord = "";
//     let longestLength = 0; 

//     for (let i = 0; i < splitStr.length; i++) {
//         const element = splitStr[i];
//         if (element.length > longestLength) {
//             longestLength = element.length; 
//             longestWord = element; 
//         }
//     }

//     return `${longestWord}-${longestLength}`;
// }

// const result = findString("I am learning programinggg bacause a want to be a Programer");
// console.log(result);

function findString(str) {
    const splitStr = str.split(" ");
    let longestWord = "";
    let longestLength = 0;
    for (let i = 0; i < splitStr.length; i++) {
        const element = splitStr[i];
        if (element.length> longestLength) {
            longestLength = element.length;
            longestWord = element;
        }
    } 
    return `${longestWord}-${longestLength}`   
}
const result = findString("I am learning programinggg bacause a want to be a Programer")
console.log(result);

