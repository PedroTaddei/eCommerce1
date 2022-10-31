var nome
var salario
var aumento
porcentagemAumento 
function CadastrarUsuario() {
     nome = prompt("Insira seu nome")
     salario = prompt("Insira seu salario")
     if (salario <= 1500) {
          aumento = 1.20
          porcentagemAumento = "20%"
     } else if (salario > 1500 && salario <= 2000) {
          aumento = 1.15
          porcentagemAumento = "15%"
     } else if (salario > 2000 && <= 3000) {
          aumento = 1.10
          porcentagemAumento = "10%"
     } else {
          aumento = 1.05
          porcentagemAumento = "5%"
     }
}    

function CalcularAumento(salario, aumento) {
     var salarioAumentado = salario * aumento
     return salarioAumentado
}

console.log("Seu nome é ", nome, " seu salario é ", salario, " você receberá ", porcentagemAumento, " de aumento e seu salário reajustado será de: ", CalcularAumento(salario, aumento) )