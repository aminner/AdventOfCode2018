var utils = require("../Utilities/Utils.js")
const BASE_PATH = "./"

function start() {
    var inputFileName = "/Day1/Input/day1_input.txt";
    if (process.argv.length >= 3) {
        inputFileName = process.argv[2];
    }
    var filePath = BASE_PATH + inputFileName;
    utils.read(filePath, {
        error: function (error) {
            console.log(error);
        }, successful: function (inputData) {
            processInput(inputData.trim().split('\n'));
        }
    });
}

function processInput(data) {
    var startLocation = 0;
    data.forEach((x) => {
        var numberToAdd = parseInt(x.substring(1, x.length));
        switch (x[0]) {
            case '+':
                startLocation += numberToAdd;
                break;
            case '-':
                startLocation -= numberToAdd;
                break;
        }
    });
    console.log(startLocation);
}

start();