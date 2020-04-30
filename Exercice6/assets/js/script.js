let firstNumber = 10;
let secondNumber = 2;

while (firstNumber / secondNumber > 1) {
    let myP = document.createElement('p');
    numbers.appendChild(myP);
    myP.innerText = firstNumber / secondNumber;
    firstNumber = firstNumber / secondNumber;
}