const prompt = require("prompt-sync")()

console.log("Bem-vindos à Pizzaria Theozinho! Este é nosso programa facilitador divide-conta.")
console.log("-".repeat(85))

const valor = Number(prompt("Digite o valor da sua comanda R$: "))
const people = Number(prompt("Nos informe quantas pessoas desejam dividir a conta: "))
const divido = (valor / people)

console.log(`\nA sua comanda foi divida para ${people} pessoas e fica no valor de R$${divido.toFixed(2)} para cada!\n`)
console.log("Aceitamos pagamento via PIX, cartão de crédito, débito ou dinheiro.\n")

const preference = prompt("Escreva a seguir sua forma de pagamento (pix / cred / deb / din): ")
console.log("-".repeat(85))

if (preference == "pix") {
    prompt("Digite o seu PIX (e-mail, CPF, nº de celular): ")
    console.log("Pix bem sucedido! Retire o recibo com o atendente.");
} else if (preference == "cred") {
    console.log("Insira seu cartão de crédito na máquina e prossiga o procedimento diretamente com o atendente.");
} else if (preference == "deb") {
    console.log("Insira seu cartão de débito na máquina e prossiga o procedimento diretamente com o atendente.");
} else if (preference == "din") {
    console.log("Prossiga o procedimento de pagamento em dinheiro diretamente com o atendente.");
} else {
    console.log("Erro. Consulte um atendente da pizzaria.");
}

console.log("-".repeat(85))
console.log(`Agradecemos a preferência, esperamos que vocês ${people} retornem em breve à nossa pizzaria!`)
