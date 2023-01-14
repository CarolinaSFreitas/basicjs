const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))
const dobro = num * 2

console.log(`O dobro do número ${num} é ${dobro}`)