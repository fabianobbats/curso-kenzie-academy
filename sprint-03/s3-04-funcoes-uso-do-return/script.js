// Exercício 1
function soma(valor1, valor2, valor3, valor4){
    return valor1 + valor2 + valor3 + valor4
}

function media(value){
    return value / 4
}

function resultado(nota1, nota2, nota3, nota4){ 
    return media(soma(nota1, nota2, nota3, nota4))
}

console.log('Média do aluno Carlos: ' + resultado(5, 6, 8, 9))

// Exercício 2
function convert(currentValue, currentType, convertType){
    switch (convertType){
        case 'Celsius':
            return convertToCelsius(currentType, currentValue)
        case 'Fahrenheit':
            return convertToFahrenheit(currentType, currentValue)
        case 'Kelvin':
            return convertToKelvin(currentType, currentValue)
        default:
            return `Informe um tipo válido`
    }
}

function convertToCelsius(currentType, currentValue){
    if (currentType == 'Celsius') {
        return `Digite um tipo diferente do atual para ser convertido`
    }else if (currentType == 'Kelvin') {
        return `${currentValue - 273.15} °C`

    }else if (currentType == 'Fahrenheit') {
        return `${(currentValue - 32) * 1.8} °C`
    }else{
        return `Informe um tipo válido`
    }
}

function convertToFahrenheit(currentType, currentValue){
    if (currentType == 'Fahrenheit') {
        return `Digite um tipo diferente do atual para ser convertido`
    }else if (currentType == 'Kelvin') {
        return `${(currentValue - 273.15) * 1.8 + 32} °C`

    }else if (currentType == 'Celsius') {
        return `${(currentValue * 1.8) + 32} °F`
    }else{
        `Informe um tipo válido`
    }
}

function convertToKelvin(currentType, currentValue){
    if (currentType == 'Kelvin') {
        return `Digite um tipo diferente do atual para ser convertido`
    }else if (currentType == 'Fahrenheit') {
        return `${(currentValue - 32) * 1.8 + 273.15} K`

    }else if (currentType == 'Celsius') {
        return `${currentValue + 273.15} K`
    }else{
        `Informe um tipo válido`
    }
}

console.log(convert(18, 'Celsius', 'Fahrenheit'))
console.log(convert(18, 'Celsius', 'Celsius'))
console.log(convert(18, 'Fahrenheit', 'Kelvin'))
console.log(convert(18, 'Kelvin', 'Celsius'))

