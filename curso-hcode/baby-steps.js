const { argv } = require("node:process");

var soma = 0;
argv.forEach((val, index) => {
  if (index > 1) {
    soma += Number(val);
  }
});
console.log(soma);
