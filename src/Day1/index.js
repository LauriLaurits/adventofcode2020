if (process.argv.length < 3) {
   // console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}
const fs = require('fs')
    , input = process.argv[2];
// Day 1 Part 1
fs.readFile(input, function (err, data) {
    if (err) throw err;
    // võibolla pole vaja stringiks teha
    const array1 = data.toString().split("\n");
    let sum = 0;
    let l = array1.length;
    for (i = 0; i < l; i++) {
        let num = Math.floor(array1[i] / 3) - 2;
        sum += num;
    }
    console.log("Day 1 Part 1: " + sum);
});
// Day 1 Part 2
fs.readFile(input, function (err, data) {
    if (err) throw err;
    const array1 = data.toString().split("\n");
    let sum = 0;
    let l = array1.length;
    for (i = 0; i < l; i++) {
        while (array1[i] > 0) {
            let num = Math.floor(array1[i] / 3) - 2;
            if (num > 0) {
                sum += num;
            }
            array1[i] = num;

        }
    }
    console.log("Day 1 Part 2: " + sum);
}
);