const { spawn } = require("child_process");
const ls = spawn("ls", ["..", "-lh", "/usr"]);
//no método spawn, cada parametro deve ser um item de array
//seria um -> ls ..

//herda do event emitter
ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.log(`stderr: ${data}`);
});

ls.on("close", (code) => {
  console.log(`processo em segundo plano finalizado com código: ${code}`);
});

//com o spawn ele nos permite executar um comando externo
// podemos rodar o -> ffmpeg
//que abre um programa, um executavel, e passa parametros para o executável
//vai executar tudo, pegar o retorno e devolver
// por isso é bom executar usando eventos, pois sabemos quando da problema e etc
