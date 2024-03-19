//duas underline temos o que vamos executando para adquirir pelo process
//argv são os parametros
console.log(`Nome do Arquivo: `, __filename);
console.log(`Diretório do Arquivo: `, __dirname);
console.log(`Parâmetros de execução: `, process.argv);
console.log(`Ambiente do Servidor: `, process.platform);
//console.log(`Variáveis de ambiente: `, process.env); //informações do ambiente
console.log(`Sistema operacional: `, process.env.OS);
console.log(`Idioma: `, process.env.LANG);
console.log(`Nome de usuário: `, process.env.USERNAME);
//quando é chamado por outro arquivo ou cliente
console.log(`Diretório de invocação do arquivo: `, process.cwd());
require("./sub.js");

switch (process.argv[2]) {
  case "-a":
    console.log("Executando rotina principal");
    break;
  case "-i":
    console.log("Executando instalação");
    break;
  case "-q":
    console.log("Encerrando aplicação");
    process.exit(); //interrompe imediatamente e nada além é executado
  default:
    console.log("Parâmetro inválido");
    break;
}
//node process.js -a teste
