const prompt = require("prompt-sync")()

const town1 = prompt("1ª Cidade: ")
const town2 = prompt("2ª Cidade: ")

const distance = Number(prompt("Distância entre as cidades em km: "))

console.log(`A distância entre ${town1} e ${town2} é de ${distance} km.`)