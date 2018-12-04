var utils = require("../Utilities/Utils.js")
const BASE_PATH = "./"

function start() {
    var inputFileName = "/Day2/Input/day2_input.txt";
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
function charCounts(str1) {
    var uchars = {};
    str1.replace(/\S/g, function (l) { uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1); });
    return uchars;
}
var two = 0;
var three = 0;
function processInput(data) {
    data.forEach((x) => {
        var countChars = charCounts(x);
        var twoFound = false;
        var threeFound = false;
        for (var char in countChars) {
           
            if (countChars.hasOwnProperty(char)) {
                if (countChars[char] == 2 && !twoFound) {
                    two++;
                    twoFound = true;
                }
                if (countChars[char] == 3 && !threeFound) {
                    three++;
                    threeFound = true;
                }
            }
        }
        console.log(x + ":" + two + "-" + three);
    });
    console.log(two + " - " + three + " = " + two*three);
}

start();