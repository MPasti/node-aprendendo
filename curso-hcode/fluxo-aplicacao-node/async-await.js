function sum(x) {
  return new Promise((resolve, reject) => {
    if (Number(x) == NaN || Number(x) == undefined || typeof x != "number") {
      reject("Value must be a number");
    }
    setTimeout(() => {
      resolve(x + 5000);
    }, 3000);
  });
}

async function main() {
  try {
    const result = await sum(100);
    console.log(`Resultado da soma: ${result}`);
  } catch (error) {
    console.log(`deu erro: ${error}`);
    console.log(process.env.USERNAME);
  }
}

main();
