// Exercício 1
function funcaoContaPasso(passos){
    let i = 1 
    
    if(passos < 1){
        console.log('Eliminado')
    }else{
        while(i <= passos){
            console.log(`Visitei a ${i}ª casa`)
            i++
        }
    }
}

funcaoContaPasso(-2)
funcaoContaPasso(6)

// Exercício 2
function funcaoVoltaCasa(casa){
    if(casa <= 1){
        console.log('valor invalido')
    }else{
        while(casa >= 1){
            console.log(`Casa ${casa}`)
            casa--
        }
    }
}
funcaoVoltaCasa(1)
funcaoVoltaCasa(6)