const { argv } = require("node:process");
const fs = require("fs");

var fs = require("fs");

const file = fs.readFileSync(argv[2]);
var lines = file.toString().split("\n").length - 1;
console.log(lines);
