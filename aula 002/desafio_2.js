// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b) {
  return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
resultado = soma(2, 1) + 5;

// Qual o valor atualizado dessa variável?
//8

// Declare uma nova variável, sem valor.
var no_value;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function atribui(sem_valor) {
  sem_valor = 5;
  console.log(`O valor da variável agora é ${sem_valor}`);
}

// Invoque a função criada acima.
atribui(no_value);

// Qual o retorno da função? (Use comentários de bloco).
//O valor da variável agora é 5

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplica(a, b, c) {
  if (a == null || b == null || c == null) {
    console.log(`Preencha todos os valores corretamente!`);
  } else {
    let resultado = a * b * c + 2;
    console.log(`O resultado é: ${resultado}`);
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplica(1, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// ele da um erro

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplica(1, 2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function salvador(a, b, c) {
  if (a == null && b == null && c == null) {
    return false;
  }
  if (a != null) {
    if (b == null) {
      if (c == null) {
        return console.log(`O resultado é: ${a}`);
      } else {
        return console.log(`O resultado é: ${ a + c}`);
      }
    } else if (c == null) {
      return console.log(`O resultado é: ${ a + b}`);
    } else {
        
      return console.log(`O resultado é: ${(a + b) / c}`);
    }
  }else if(b == null){
      if(c ==  null){
          return false
      }else{
        return console.log(`O resultado é: ${c}`);
      }
  }else if(c == null){
    return console.log(`O resultado é: ${b}`)
  }else{
      return console.log(`O resultado é: ${b+c}`)
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
salvador(1)
salvador(2,1)
salvador(1,2,3)