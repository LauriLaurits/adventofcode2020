// Day 1 Part 1
if (process.argv.length < 3) {
    process.exit(1);
}
const fs = require('fs')
    , input = process.argv[2];
fs.readFile(input, function (err, data) {
    if (err) throw err;
    const values = data.toString().split("-");

    let x = values[0];
    let y = values[1];
let allvalues = [];
let regex1 = /(.)\1+/;
let regex2 = /^[1-9]*$/;

while (x < y) {
    allvalues.push(x);
    x++;
}
//console.log("AllValues " + allvalues.length)
let filterDoubles = allvalues.filter(s => regex1.exec(s));
//console.log("FilterDoubles " + filterDoubles.length);

let filterZeros = filterDoubles.filter(s => regex2.exec(s));
//console.log("FilterZeroes " + filterZeros.length);

let separateValues = [];
for (let i = 0; i < filterZeros.length; i++) {
    separateValues.push(filterZeros[i].toString().split('').map(Number));
}

function isIncreasingSecuence(numbers) {
    for (let i = 0; i < 5; i++) {
        if (!(numbers[i] <= numbers[i + 1])) {
            return false;
        }
    }
    return true;
}
let countArray = [];
let xxx = 0;
while (xxx < separateValues.length - 1) {
    if (isIncreasingSecuence(separateValues[xxx]) == true) {
        countArray.push(separateValues[xxx]);
        xxx++;
        isIncreasingSecuence(separateValues[xxx]);
    } else {
        xxx++;
        isIncreasingSecuence(separateValues[xxx]);
    }

}
console.log("Day 4 Part 1: " + countArray.length);
//Day 4 Part 2
function testDoubles(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if ((numbers[i] === numbers[i - 1]) && (numbers[i + 1] !== numbers[i]) && (numbers[i] !== numbers[i - 2])) {
            return true;
        }
    }
    return false;
}

let yyy = 0;
let count = [];

while (yyy < countArray.length) {
    if (testDoubles(countArray[yyy]) == true) {
        count.push(countArray[yyy]);
        yyy++;
    }
    else {
        yyy++;
    }
}
console.log("Day 4 Part 2: " + count.length);
});


