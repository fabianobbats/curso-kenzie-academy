// Exercício 1
let carrinhoDeCompras =
    [
        "Funko Pop Kakashi",
        "Dragon Ball Collection",
        "Vou ser Dev"
    ]

function testaPosicao(lista, posicao){
    if(carrinhoDeCompras[posicao] === 'Vou ser Dev'){
        console.log('Cliente Ganhou! :D')
    }else{
        console.log('Cliente não Ganhou! :(')
    }
}
  
testaPosicao(carrinhoDeCompras, 0)
testaPosicao(carrinhoDeCompras, 2)

// Exercício 2
function qualTipoDeElemento(lista, posicao){
    if(typeof lista[posicao] === "number"){
        console.log("É do tipo number")
    }else{
        console.log("Não é do tipo number")
    }
}

let tiposDiversos = [1.5, "String", true, 10]
  
qualTipoDeElemento(tiposDiversos, 0)
qualTipoDeElemento(tiposDiversos, 2)

// Exercício 3
function bilhetePremiado(participantes){
    goldenNumber = Math.floor(Math.random() * (4 - 1) + 1)

    console.log(`O ganhador foi o passageiro ${participantes[goldenNumber - 1]} da poltrona ${goldenNumber}`)
}

let participantes = ['Fabiano', 'Fernanda', 'Maria']

bilhetePremiado(participantes)
bilhetePremiado(participantes)
