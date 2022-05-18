// operador ==
// serve para testarmos se um valor é igual ao outro
// exemplo 1

1 == 1 //retorna true
1 == 2 //retorna false


// ele sempre vai retornar true ou false, true se for igual, ou false se for diferente

// e temos o operador !=

1 != 2 //retorna true
1 != 1 //retorna false

// temos tbm === que testa a igualdade de tipo
// e o !== que testa a diferença do tipo

'fernando' == 'fernando';

var um = "1"
var numum = 1

um == numum //vai dar true, pq o Js tenta converter o tipo para ver se é igual, e assim retorna true.

//porém se colocarmos

um === numum //retorna false, pq os tipos são diferentes

um !== numum // retorna true pq os tipos não são iguais


// temos tbm o >(maior q), <(menor q), >= (maior ou igual), <=(menor igual)