const prompt = require("prompt-sync")()

const num = Number(prompt("Para descobrir os números das casas vizinhas, nos informe o número da sua casa: "))

const viz1 = num - 1
const viz2 = num + 1

console.log(`Os números das casas de seus vizinhos são: ${viz1} e ${viz2}.`)