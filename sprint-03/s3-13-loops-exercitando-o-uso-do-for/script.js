// Exercício 1
function pares(arr){
    let strPares = ''
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            strPares += `${arr[i]}, `
        }
        
    }
    console.log(strPares.slice(0, -2))
}

const arr = [5, 4, 7, 30, 16, 89]
pares(arr) // resultado esperado = 4, 30, 16

// Exercício 2
function soma(arr){
    sum = 0
    for(let i = 0; i < arr.length; i++){
        let aux = arr[i]
        if(typeof arr[i] === 'string'){
            aux = parseInt(arr[i])
        }
        sum += aux
    }
    console.log(sum)
}

soma([1, '4', 9, 18]) // resultado esperado = 32
