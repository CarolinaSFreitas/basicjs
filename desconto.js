const prompt = require("prompt-sync")()

const nome = prompt("Nome mais lindo do mundo: ")
const salarioDesejado = Number(prompt("Salário desejado R$: "))
const desconto = salarioDesejado * 0.10
const salarioFinal = salarioDesejado - desconto

console.log(`O desconto de salário é de R$: ${desconto}`)
console.log(`O salário final é de R$: ${salarioFinal}`)