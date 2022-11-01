var nome
var salario
var aumento
var porcentagemAumento
var calcularNovamente = "s"
function CadastrarUsuario() {
     nome = prompt("Insira seu nome")
     salario = parseFloat(prompt("Insira seu salario"))
     if (salario <= 1500) {
          aumento = 1.20
          porcentagemAumento = "20%"
     } else if (salario > 1500 && salario <= 2000) {
          aumento = 1.15
          porcentagemAumento = "15%"
     } else if (salario > 2000 && salario <= 3000) {
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


function CalcularNovamente() {
     calcularNovamente = prompt("Deseja calcular novamente? s ou n?")
}

while (calcularNovamente == "s") {
     CadastrarUsuario()
     CalcularAumento(salario, aumento)
     console.log("Seu nome é " + nome + " seu salario é " + salario + " você receberá " + porcentagemAumento + " de aumento e seu salário reajustado será de: " + CalcularAumento(salario, aumento))
     CalcularNovamente()
}
