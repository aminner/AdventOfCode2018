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
function processInput(data) {
    data.forEach((x) => {
        data.forEach((y) => {
            multipleFound = false;
            if (x !== y) {
                var differenceIndex = -1;
                for (var i = 0; i < x.length; i++) {
                    if (x[i] !== y[i]) {
                        if (differenceIndex < 0) {
                            differenceIndex = i;
                        } else {
                            multipleFound = true;
                        }
                    }
                }
                if(!multipleFound)
                {
                    console.log(x + " - " + y);
                }
            }
           
        });

    });
}

start();