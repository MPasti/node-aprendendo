import { spawn } from "child_process";
const ls = spawn("ls", ["-lh", "/usr"]);

//stdio => o que queremos fazer? 3 tipos de dados
//out -> sair | err -> erro | in -> mandar
ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (err) => {
  console.log(`stderr: ${err}`);
});

// close !== exit
//como é um processo em segundo plano, podemos abrir vários processos (child process)
// estamos exibindo varios processos de segundo plano -> abrindo arquivo pdf, lendo
//nessa situção, o exit seria para fechar cada um deles,
// close é pq fechou todas as conexões, encerrou tudo
ls.on("close", (code) => {
  console.log(
    `processo em segundo plano finalizado com sucesso \n code: ${code}`
  );
});
