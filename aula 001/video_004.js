// funções são blocos de código que podem ser invocados
//assim declaramo a função
function nome (){

}

//para chamar ela
nome()

//função para somar
var x = 1
function soma (){
    x = x + 1;
}
soma()
//se chamarmos a função, o valor de x será mudado para 2
//se criarmos um valor dentro de uma variável, o valor só será acessível dentro dela

function qualquer(){
    var y = 1
}

// o y será inacessível

//--------------------------
//as funções podem retornar valores
function cinco(){
    return 5;
}

// se chamarmos a função, será retornado o valor 5

//------------
// as funções podem receber parametros
function soma2(x,y){
    return x + y;
}

// assim para chamar ela precisamos passar parametros

soma2(2,3)
soma2 (x,y)




