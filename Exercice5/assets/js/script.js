let firstNumber = 2;
let secondNumber = 3;
// let idResult = firstNumber * secondNumber;
// let result =  firstNumber * idResult;

while (firstNumber * secondNumber < 250) {
    let myP = document.createElement('p');
    numbers.appendChild(myP);
    myP.innerText = firstNumber * secondNumber;
    secondNumber = firstNumber * secondNumber;
}

// while (idResult < 250) {
//     if (result < 250) {
//         let myP = document.createElement('p');
//         numbers.appendChild(myP);
//         myP.innerText = idResult + result;
//         myP.innerText = result;
//         console.log(result)
//     } else {
//         break
//     }
// }