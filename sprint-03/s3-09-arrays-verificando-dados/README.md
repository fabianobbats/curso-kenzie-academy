# Atividades - Arrays: Verificando dados

Nessa atividade vamos treinar nossos conhecimentos em arrays realizando condicionais para avaliar os dados

## Exercício 1 - O Ganhador

Você trabalha em uma loja e hoje essa loja vai premiar o primeiro cliente do dia, mas somente se em seu carrinho tiver o livro "Vou ser Dev". Execute um teste de condição usando a posição do seu array como verificador. Use os conceitos de funções aprendidos anteriormente para testar de forma dinâmica. No console, sua aplicação deve imprimir se o cliente ganhou ou não.

> function testaPosicao(lista, posicao)
> 
>   {
> 
>     Lógica
> 
>   }
> 
>   let carrinhoDeCompras =
> 
>   [
> 
>    "Funko Pop Kakashi",
> 
>    "Dragon Ball Collection",
> 
>    "Vou ser Dev"
> 
>   ]
> 
>   testaPosicao(carrinhoDeCompras, 0)

## Exercício 2 - De que tipo é ?

Agora vamos descobrir qual o tipo do item contido em nosso array. Um jovem estudante de programação fez uma lista de elementos com tipos diferentes do JavaScript e agora ele quer quer descobrir se ele adicionou o tipo "number" na lista. O seu objetivo é imprimir se o tipo do elemento da posição indica é number ou não. Podemos seguir a lógica adotada no exercício anterior.

> function qualTipoDeElemento(lista, posicao)
> 
>     {
> 
>       if(lista[posicao] == "number")
> 
>       //Este if não está correto, faça a alteração pertinente
> 
>       //para que ele teste o tipo da maneira correta
> 
>     }
> 
>     let tiposDiversos =[1.5,"String",True,10]
>   
>     qualTipoDeElemento(tiposDiversos, 0)

***Usamos a posição do array para verificar um elemento, mas e quando queremos verificar o tipo do elemento 🤨. Podemos descobrir o tipo de uma variável usando o TypeOf***

## Exercício 3 - Ônibus premiado

Você é motorista de um ônibus e vai descobrir que neste ônibus existe uma poltrona com um bilhete de loteria premiado. Seu objetivo é desenvolver uma função que testa valores condicionais. Utilize o código abaixo para gerar um número aleatório que irá representar a poltrona com o bilhete premiado. Só existem 3 opções de acento. Sua função deve receber um array com 3 nomes e imprimir no console o passageiro que encontrou o bilhete. Pense em alguma maneira de tratar o indice 0.

> Math.floor(Math.random() * (4 - 1) + 1)
