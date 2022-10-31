var nome
var salario
var aumento

function CadastrarUsuario() {
     nome = prompt("Insira seu nome")
     salario = prompt("Insira seu salario")
     if (salario <= 1500) {
          aumento = 1.20
     } else if (salario > 1500 && salario <= 2000) {
          aumento = 1.15
     } else if (salario > 2000 && <= 3000) {
          aumento = 1.10
     } else {
          aumento = 1.05
     }
}    

function CalcularAumento(salario, aumento) {
     var salarioAumentado = salario * aumento
     return salarioAumentado
}