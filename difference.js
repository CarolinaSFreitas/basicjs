const prompt = require("prompt-sync")()

const nome1 = prompt("Nome da irmã mais velha: ")
const nome2 = prompt("Nome da irmã mais nova: ")

const idade1 = Number(prompt("Idade da irmã mais velha: "))
const idade2 = Number(prompt("Idade da irmã mais nova: "))
const difference = (idade1 - idade2)

console.log(`A diferença de idade entre as irmãs ${nome1} e ${nome2} é de ${difference} anos.`)