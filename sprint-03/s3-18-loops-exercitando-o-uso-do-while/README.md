# Atividades - Loops: Exercitando uso do While

Nessa atividade vamos treinar nossos conhecimentos em Loops utilizando a sitaxe do While

## Exercício 1 - De Casa em Casa

Você criou um circuito e, de acordo com os passos dados no percurso, você deverá imprimir no console as casas por onde passou. Cada casa tem um número. A contagem inicia em 1. Ou seja, se você der 10 passos, deverá imprimir no console **Visitei a {índice}ª casa** , gerando essa frase dinamicamente. Onde o valor do índice representa o número da casa.

* Criar uma função que recebe como parâmetro a quantidade de passos a serem dados
* Teste se o valor recebido é positivo maior que 0, caso contrário o console deverá imprimir eliminado
* Incrementar o índice até que o valor passado como parâmetro seja antingido.

> function funcaoContaPasso(passos){
> 
>   let i = 1 
> 
>   While(condicao){
> 
>       //lógica
> 


>       i++
> 
>     }
> 
>   }
>  
## Exercício 2 - Recomeçando

Você chegou em uma casa com desafio, e perdeu. Agora precisa voltar de onde está até o início.

* Criar uma função que recebe como parâmetro a casa em que está.
* Teste se o valor recebido é positivo maior que 0 e diferente de 1, caso contrário o console deverá imprimir "valor inválido".
* Decremente o índice até que fique igual o valor da primeira casa. Imprima o número de cada casa no console.

Pense em uma lógica de contagem regressiva irá realizar a tarefa partindo do valor recebido até o número 1, que representa a primeira casa do circuito.