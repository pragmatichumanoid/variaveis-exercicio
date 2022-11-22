let nome = ""
let idade = Number()
console.log( typeof nome)

console.log(typeof idade)
nome = prompt("Qual é seu nome?");
idade = prompt("Qual é sua idade?");
console.log(typeof nome)
console.log(typeof Number(idade))
console.log("olá", nome, "você tem", idade, "anos")

 const p1 = "você gosta de javascript?"
 const r1 = prompt(p1)
 const p2 = "está tendo dificuldade?"
 const r2 = prompt(p2)
 const p3 = "curtiu a aula de hoje?"
 const r3 = prompt(p3)
console.log(
    p1,  "-", r1, "-", p2, "-", r2, "-", p3,"-", r3
)