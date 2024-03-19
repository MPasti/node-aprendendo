function soma(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x + 5000);
    }, 3000);
  });
}

soma(200).then((result) => {
  console.log(`Promise resolvida: ${result}`);
});
