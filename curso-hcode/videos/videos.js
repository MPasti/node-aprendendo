//exemplo
//node videos ./src 1 10

const { spawn } = require("child_process");
//parent serve para pegar o diretório anterior ao que estamos
const parent = process.argv[2];
//aqui pegamos o segundo parametro passado, que seria o diretório onde estão os vídeos

let videos = [];

if (process.argv[2]) {
  //aqui como terceiro parametro teria o video inicial até o final numericamente
  const start = parseInt(process.argv[3]);
  const end = parseInt(process.argv[4]);

  for (let i = start; i <= end; i++) {
    videos.push(i);
  }
  //inverter o array
  videos.reverse();
  processResize();
} else {
  console.log("É necessario criar um diretório no nível anterior");
}

//função para redimencionar (comprimir) ativando o ffmpeg através do child_process
function videoResize(video, quality) {
  const promise = new Promise((resolve, reject) => {
    const ffmpeg = spawn(`./ffmpeg/bin/ffmpeg`, [
      //parametros de encoding de video aqui, bitrate e etc
      "-i",
      `${parent}/${video}.mp4`,
      "-codec:v",
      "libx264",
      "-profile:v",
      "main",
      "-preset",
      "slow",
      "-b:v",
      "400k",
      "-maxrate",
      "400k",
      "-bufsize",
      "800k",
      "-vf",
      `scale=-2:${quality}`,
      "-threads",
      "0",
      "-b:a",
      "128k",
      `${parent}/resultados/${video}-${quality}.mp4`,
    ]);
    ffmpeg.stderr.on("data", (data) => {
      console.log(data);
    });
    ffmpeg.on("close", (code) => {
      resolve();
    });
  });
  return promise;
}

async function processResize() {
  let video = videos.pop(); //-> remove e retorna o ultimo video

  if (video) {
    try {
      await videoResize(video, 720);
      await videoResize(video, 480);
      await videoResize(video, 360);

      console.log(`Videos renderizados - ${video}`);

      //função recusriva para não precisar de loop
      processResize();
    } catch (error) {
      console.log(error);
    }
  }
}
