/**
 * 1. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
mostrar :
    a. A menor altura do grupo;
    b. A maior altura do grupo;
 */

    let pess = []

    for (let i = 1; i <= 15; i++) {
        let p = parseFloat(prompt(`Pessoa ${i} digite sua altura`))
        pess.push(p)
    }

    let maior = 0
    let menor = 1000

    for (let altura of pess){
        if (altura > maior) {
            maior = altura
        } if (altura < menor) {
            menor = altura
        }
    }

    alert(`A maior altura é ${maior}`)
    alert(`A menor altura é ${menor}`)