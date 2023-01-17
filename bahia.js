const prompt = require("prompt-sync")()

console.log(("Bem-vindo(a) as Casas Bahia!"));
console.log("-".repeat(60));
console.log("Calcule a porcentagem de desconto do seu produto aqui.");

const product = prompt("Tipo de Produto (movel, eletrod): ")
const value = Number(prompt("Valor do Produto R$: "))

const desconto1 = value * 0.10 
const desconto2 = value * 0.15

console.log("-".repeat(80));

if (product == "movel"){
    console.log(`Estamos com promoção de móveis na nossa loja hoje! O desconto é de 10%!\nSeu produto de R$${value} está por R$${desconto1}! Aproveite!`);
}else if(product == "eletrod"){
    console.log(`Estamos com promoção de eletrodomésticos na nossa loja hoje! O desconto é de 15%!\nSeu produto de R$${value} está por R$${desconto2}! Aproveite!`);
}else{
    console.log("ERRO. Consulte um vendedor.");
}

console.log("-".repeat(80));

console.log("As Casas Bahia agradece a preferência!");