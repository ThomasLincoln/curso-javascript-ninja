/*
quando colocamos funções em objetos, nós chamamos a função de método
*/

var pessoa ={
    nome: 'Fernando',
    idade: 18,
    peso: 81,
    imc: imc_calculo()//método
}

/* 
aqui não podemos fazer pessoa = {sexo: 'masculino'}

se não a var toda é perdida, 
então fazemos o seguinte
pessoa.cor = "vermelho"

porém, para adcionar um método, ele precisa ter sido criado antes.
*/

pessoa.cor = 'vermelho';

function andar(){
    return 'andou'
}
pessoa.andar = andar();