const Buffer = require("buffer").Buffer;

const buf = Buffer.from("Boa noite tudo bem");

//vai vir em binário e vai mostrar em hexadecimal
console.log(buf);
//trouxe para chines akkaka
console.log(buf.toString("utf16le"));

const buf_string = Buffer.from("Carregnado uma string", "utf-8");
console.log(buf_string.toString());
console.log(Buffer.isBuffer(buf_string));

console.log(buf_string.toString("utf-8", 0, 10));
//muito bom para manipular excel, pdf e afins, independente do tamanho do arquivo
