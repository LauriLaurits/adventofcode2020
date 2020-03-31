if (process.argv.length < 3) {
    // console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}
const fs = require('fs')
    , input = process.argv[2];

//Day 2 Part 1
fs.readFile(input, 'utf8', function (err, data) {
    if (err) throw err;
    let inputList = data.split(',').map(Number);

    let x = 12;
    let y = 2;

    inputList.splice(1, 2, x, y);
    let idx = 0;
    let computing = true;
    while (computing) {
        let code = inputList[idx];
        let argument1;
        let argument2;
        let value;
        switch (code) {
            case 1:
                argument1 = inputList[idx + 1];
                argument2 = inputList[idx + 2];
                //Add together index idx + 1 and idx + 2 and put value idx + 3
                let sum = inputList[argument1] + inputList[argument2];
                inputList[inputList[idx + 3]] = sum;
                break;
            case 2:
                argument1 = inputList[idx + 1];
                argument2 = inputList[idx + 2];
                //Multiply index idx + 1 and idx + 2 and put value idx + 3
                let result = inputList[argument1] * inputList[argument2];
                inputList[inputList[idx + 3]] = result;
                break;
            default:
                computing = false;
                break;
        }
        idx += 4;
    }

    console.log("Day 2 Part 1: " + inputList[0]);
});

// Day 2 Part 2
fs.readFile(input, 'utf8', function (err, data) {
    if (err) throw err;
    let original = data.split(',').map(Number);
    let inputList = [...original];

    let noun = -1;
    let verb = 0;
    let answer = 19690720;

    while (inputList[0] != answer) {
        noun++;
        if (noun == 100) {
            noun = 0;
            verb++;
        }
        inputList = [...original];
        inputList.splice(1, 2, noun, verb);
        let idx = 0;
        let computing = true;
        while (computing) {
            let code = inputList[idx];
            let argument1;
            let argument2;
            let value;
            switch (code) {
                case 1:
                    argument1 = inputList[idx + 1];
                    argument2 = inputList[idx + 2];
                    //Add together index idx + 1 and idx + 2 and put value idx + 3
                    let sum = inputList[argument1] + inputList[argument2];
                    inputList[inputList[idx + 3]] = sum;
                    break;
                case 2:
                    argument1 = inputList[idx + 1];
                    argument2 = inputList[idx + 2];
                    //Multiply index idx + 1 and idx + 2 and put value idx + 3
                    let result = inputList[argument1] * inputList[argument2];
                    inputList[inputList[idx + 3]] = result;
                    break;
                default:
                    computing = false;
                    break;
            }
            idx += 4;
        }
    }
    console.log("Day 2 Part 2: " + (100 * noun + verb));
});
