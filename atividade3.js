//alert('TUDO OK')

let soma = 0
let media = 0

let n = parseInt(prompt('Digite o número de números'))

for (let i = 1 ; i <= n ; i++) {
    let valor  = parseInt(prompt('Digite um valor'))
    soma=soma+valor
}

media = soma / n
alert(`valor da media é ${media}`)