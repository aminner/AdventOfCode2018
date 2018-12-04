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
            console.log(processInput(inputData.trim().split('\n')));
        }
    });
}
var stateList = [];
var startLocation = 0;
function processInput(data) {
    stateList.push(startLocation);
    var found = false;
    while (!found) {
        data.forEach((x) => {
            if (!found) {
                var numberToAdd = parseInt(x.substring(1, x.length));
                switch (x[0]) {
                    case '+':
                        startLocation += numberToAdd;
                        if (stateList.indexOf(startLocation) >= 0) {
                            found = true;
                            break;
                        }
                        stateList.push(startLocation);
                        break;
                    case '-':
                        startLocation -= numberToAdd;
                        if (stateList.indexOf(startLocation) >= 0) {
                            found = true;
                            break;
                        }
                        stateList.push(startLocation);
                        break;
                }
            }
        });
    }
    console.log(startLocation);
}
start();