function somarDoisValores(a, b){
    return a + b
}
console.log(somarDoisValores(15, 876))

function whatType(obj){
    return `O valor (${obj}) é do tipo (${typeof obj})`
}
console.log(whatType(true))

function somarNotas(nota1, nota2, nota3, nota4){
    if((typeof nota1 == 'number') && (typeof nota2 == 'number') && (typeof nota3 == 'number') && (typeof nota4 == 'number')){
        return nota1 + nota2 + nota3 + nota4
    }
    return 'O campo só pode receber números'
}
console.log(somarNotas(8, '6', 9, 3))