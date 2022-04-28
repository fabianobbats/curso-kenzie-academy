# Atividades - Funções: Exercitando o uso do return


Nessa atividade vamos treinar nossos conhecimentos em funções utilizando o return

## Exercício 1 - Resultado final do bimestre

Vamos elaborar uma solução utilizando funções, onde um determinado professor possa passar as 4 notas do bimestre e que retorne a média desse aluno.

Nesse exercício vamos criar 3 funções, onde cada uma irá ficar responsável por uma execução específica.

Vai ficar bem mais organizado.

**1º** - Vamos criar uma função responsável por somar os 4 valores recebidos:

**2º** - Agora, uma segunda função responsável por dividir o valor recebido por 4:

Agora vamos criar a função que irá chamar as outras que criamos e passar o valores

**3º** - Crie mais uma função, que será responsável por receber os valores das 4 notas e passar para a função soma, bem como passar o valor da soma para a função media e retorne a média do aluno:

Pronto, agora para testar vamos chamar a função resultado dentro de um console, para imprimir na tela

> console.log('Média do aluno Carlos: ' + resultado(5, 6, 8, 9))

## Exercício 2 - Conversor de temperatura
Você precisa criar uma função que recebe o valor de uma temperatura, o tipo da temperatura que está sendo passada, e, para qual tipo de temperatura o usuário deseja converter, sendo as opções:

*Celsius, Fahrenheit ou Kelvin*

Crie uma função separada para cada tipo de temperatura e realize as transformações necessárias, retornando ao final o valor convertido

Por exemplo:

> convertToCelsius()
> 
> convertToFahrenheit()
> 
> convertToKelvin()

Sua função deve conter as seguintes condições:
**1º** A função deve sempre chamar as funções diferentes do tipo atual, por exemplo:

- Se for passado como tipo atual: 'Celsius', deve ser analisado se o tipo a ser convertido é igual a 'Fahrenheit' ou 'Kelvin'

- Se for passado como tipo atual: 'Fahrenheit', deve ser analisado se o tipo a ser convertido é igual a 'Celsius' ou 'Kelvin'

- Se for passado como tipo atual: 'Kelvin', deve ser analisado se o tipo a ser convertido é igual a 'Fahrenheit' ou 'Celsius'

**2º** Dentro de cada função de conversão, deve haver as condições para avaliar o tipo da temperatura atual, para que seja retornado o valor de acordo com a formula, por exemplo:

> function fahrenheit(currentType, currentValue) {
>
>   if (currentType == 'Celsius') {
> 
>     return // Retorne o resultado da conversão de Celsius para Fahrenheit
>   
>   }
> 
>   if (currentType == 'Kelvin') {
> 
>     return // Retorne o resultado da conversão de Kelvin para Fahrenheit
> 
>   }
> 
> }

**3º** Se o tipo atual for igual ao tipo a ser convertido, deve ser retornado uma mensagem informando para o usuário inserir um tipo diferente do atual, para ser convertido

Exemplo:

> convert(18, 'Celsius', 'Celsius')

Resultado esperado:

> Digite um tipo diferente do atual para ser convertido
