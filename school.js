const prompt = require("prompt-sync")()

console.log("I.E.E. Théo Freitas - Sistema de Média de Notas Trimestral")
console.log("-".repeat(60))

const aluno = prompt("Nome do aluno: ")
const disciplina = prompt("Disciplina: ")

const nota1 = Number(prompt("Nota do 1º trimestre: "))
const nota2 = Number(prompt("Nota do 2º trimestre: "))
const nota3 = Number(prompt("Nota do 3º trimestre: "))
console.log("-".repeat(80))

const media = (nota1 + nota2 + nota3) / 3

console.log(`${aluno}, sua média final trimestral de ${disciplina} é ${media.toFixed(1)}.`)

if(media < 18){
    console.log(`${aluno}, você foi reprovado(a). Procure se informar com seu(a) professor(a) sobre os métodos de recuperação.`)
}else if (media >= 18 && media <= 29.9){
    console.log(`${aluno}, você foi aprovado(a)! Parabéns!`)
}else if(media == 30){
    console.log(`${aluno}, você foi aprovado(a) com nota máxima! Parabéns pelo esforço!`)
}else{
    console.log("ERRO. Revise os campos preenchidos ou busque auxílio de alguém da direção da escola.")
}