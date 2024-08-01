function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNum1 = getRandomInt(1, 10);
console.log("Випадкове число від 1 до 10:", randomNum1);

let randomNum2 = getRandomInt(40, 50);
console.log("Випадкове число від 40 до 50:", randomNum2);

let randomNum3 = getRandomInt(1, 100);
console.log("Випадкове число від 1 до 100:", randomNum3);



function greet(msg, name) {
    return msg + ', ' + name;
}

console.log(greet('Hi', 'John'));
console.log(greet('Hey', 'Bob'));
console.log(greet('Hello', 'Mary'));




function sumBigIntegers(numStr1, numStr2) {

    const bigInt1 = BigInt(numStr1);
    const bigInt2 = BigInt(numStr2);

    const sum = bigInt1 + bigInt2;


    return sum;
}

console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // Виводить 18014398509481982n

