/**
 * O IMC - é um critério da Organização Mundial da Saúde para dar umaindicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / (altura)**2. Elabore um algoritmo que leia o peso de um adulto e mostre sua condição de acordo com a tabela abaixo.

        IMC em adultos condição: A
        baixo de 18.5 >> abaixo do peso.
        Entre 18.5 e 25 >> peso normal.
        Entre 25 e 30 >> acima do peso.
        Acima de 30 >> obeso.

 */

    let peso = parseFloat(prompt('Digite seu peso'))
    console.log(peso)

    let altura = parseFloat(prompt('Digite sua altura'))
    console.log(altura)

    let valor  = peso / (altura ** 2)
    console.log(valor)


        if (valor <= 18.5) {
            alert('Você está abaixo do peso!')
        } else if (valor <= 25) {
            alert('Você está com peso ideal!')
        } else if (valor <= 30) {
            alert('Você está acima do peso!')
        } else {
            alert('VOCÊ ESTA ACIMA DO PESO!')
        }