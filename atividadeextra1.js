/**
 * Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo 
 * que calcule seu peso ideal, ultilizando as seguintes formulas:
        para homens: (72.7 * h)- 58;
        para mulheres: (62.1 * h)- 44.
 */

//calcular o peso ideal

let sexo = Number(prompt('Digite 1 se for mulher e 2 se for homem'))
let altura = parseFloat(prompt('Digite sua altura'))

if ( sexo == 1 ) {
let pesoIdeal = (62.1 * altura) - 44.7
alert(`MULHER, seu peso ideal é ${pesoIdeal}`).toFixed(2)
}else{
let pesoIdeal = (72.7 * altura) - 58
alert(`HOMEM, seu peso ideal é ${pesoIdeal}`).toFixed(2)
}
