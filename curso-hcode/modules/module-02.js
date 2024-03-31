//require("./module-01");
//aqui estamos importando um arquivo como todo, então podemos executar o oculta

//se amarzenarmos em uma referencia então vai ter só os módulos exportados
//também é possível fazer por atribuição por desestruturação
const module01 = require("./module-01");

//executado um modulo importado
module01.executa();

//oculta();
//não pode ter tag de const ou function
