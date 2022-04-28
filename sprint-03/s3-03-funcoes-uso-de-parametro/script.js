function sum(a, b){
    return a + b
}

function whatType(obj){
    return `O valor (${obj}) é do tipo (${typeof obj})`
}

function notas(bim1, bim2, bim3, bim4){
    if((typeof bim1 == 'number') && (typeof bim2 == 'number') && (typeof bim3 == 'number') && (typeof bim4 == 'number')){
        return bim1 + bim2 + bim3 + bim4
    }
    return 'O campo só pode receber números'
}
