function soma(x) {
  return new Promise((resolve, reject) => {
    // if (isNaN(x)) {
    //   reject(new Error('O argumento não é um número válido.'));
    // } else {
    //   setTimeout(() => {
    //     resolve(x + 5000);
    //   }, 3000);
    // }
    setTimeout(() => {
      resolve(x + 5000);
    }, 3000);
  });
}

soma(200).then((result) => {
  console.log(`Promise resolvida: ${result}`);
});
