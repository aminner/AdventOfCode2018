var utils = require("../Utilities/Utils.js")
const BASE_PATH = "./"

function start() {
    var inputFileName = "/Day3/Input/day3_input.txt";
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
var fabric = [];
var inch = 0;
function processInput(data) {
    data.forEach((x) => {
        var elements = x.split(' ');
        var coordinates = elements[2].replace(':', '').split(',');
        var size = elements[3].split('x');
        var start = { x: parseInt(coordinates[0]), y: parseInt(coordinates[1]) };
        var area = { width: parseInt(size[0]), height: parseInt(size[1]) };
        for (var x = start.x; x < start.x + area.width; x++) {
            if (!fabric[x]) {
                fabric[x] = [];
            }
            for (var y = start.y; y < start.y + area.height; y++) {
                if (fabric[x][y] && fabric[x][y] !== 'X') {
                    fabric[x][y] = 'X';
                    inch++;
                } else if (!fabric[x][y]) {
                    fabric[x][y] = elements[0];
                }
            }
        }
    });
    console.log(inch);
}

start();