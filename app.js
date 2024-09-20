//desafios 1

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole(){
    console.log('O Botão foi Clicado!')
}

function mensagemAlert(){
    alert('Ta Díficil Cancelar esse Texto');
}

function perguntaPrompt(){
    let cidade = prompt('Qual Cidade Você Mora?');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function soma(){
    let num1 = parseInt(prompt('Digite um número:'));
    let num2 = parseInt(prompt('Digite mais um número:'));
    let resultadoSoma = num1 + num2;
    alert(`${num1} + ${num2} = ${resultadoSoma}`);
}
//fim desafios 1

//desafios 2:
//1°
function tarefa(){
    console.log('olá mundo');
}
tarefa();
//2°
function recebaNome(nome){
    console.log(`Olá, ${nome}`);
}
recebaNome("Victor");
//3°
function tentnum(numero){
    let numDobrado = numero * 2;
    return numDobrado;
    //ou return numero * 2; apenas.
    
}
let rodavida = parseInt(Math.random() * 10 )
let resultadoDobro = tentnum(rodavida);
console.log(resultadoDobro);
//4°
function mediaDeTres(n1, n2, n3){
    let mediaTres = (n1 + n2 + n3)/3
    return mediaTres;
    // ou return (n1 + n2 + n3)/3; apenas
}
let ngmMePara = mediaDeTres(5, 5, 2);
console.log(ngmMePara);

//5°
function encontrarMaior(a, b){
    return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);

//6°
function eleMesmo2x(nm1){
    return nm1 * nm1;
}

let multiplica = eleMesmo2x(5);
console.log(multiplica);

//fim dos desafios 2;

console.log('Registro DEsafios 3');
//Desafios 3:

//1
console.log('First');
function calculoIMC(peso, altura){
    let imc = peso/(altura * altura);
    return imc;
}

let meuimc = calculoIMC(56.5, 1.68);
console.log(meuimc);

//2
console.log('Second');
function numFatorial(numeroNe) {
    let fatorial = numeroNe; 
    if (numeroNe == 0 || numeroNe == 1){
        return 1;
    }
    while( numeroNe > 1 ) {
        numeroNe--;
        fatorial *= numeroNe;      
    } 
    return fatorial;
    
}     
let fatfat = numFatorial(5);
console.log(fatfat);

//3 
console.log('Third');

function conversaoDolar(valorReal){
    let convertido = valorReal/4.80;
    return convertido;
}

let meuReal = conversaoDolar(483722);
console.log(meuReal);

//4
console.log('Four');

function calculoAreaRetan(altura, largura){
    let calculoArea = altura * largura;
    return calculoArea;
}

let area = calculoAreaRetan(23.54, 10.3);
console.log(area);

//5
console.log('Quinto')

function calculoAreaCirculo(raio){
    let calculoPerimetroCircu = 2 * raio * 3.14;
    let calculoAreaCircu = 3.14 * (raio * raio);
    return calculoPerimetroCircu && calculoAreaCircu;
       
}

let areaEperimetro = calculoAreaCirculo(5);
console.log(' ta errado o jeito mas ta certo a função so que pelo q eu entendi eu so posso fazer uma função para cada coisa.');

//6
console.log('Sexto')

function tabuada(tabNum){
    let multiplicador = 1;
    let resultadoTabuada;
    while(multiplicador < 11){
        resultadoTabuada = tabNum * multiplicador;
        multiplicador++; 
        console.log(resultadoTabuada);      
    }
    return resultadoTabuada;
    
}

let tentTabuada = tabuada(8);
console.log(tentTabuada);

//Aqui Começa os Desafios 4:

console.log('Aqui Começa os Desafios 4:');

//1
console.log(' 1 : Primeiro');

let listaGenerica = [];

//2
console.log(' 2 : Segundo');

let linguagensDeProgramacao = ['JavaScrpit', 'C','C++','Kotlin','Python'];
console.log(linguagensDeProgramacao);
//3 
console.log('3 : Terceiro');

linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');
linguagensDeProgramacao.push('C#');

console.log(linguagensDeProgramacao);

//4
console.log('4 : Quarto');

lista3Nomes = ['Victor', 'Jamille', 'Sasa'];
console.log(lista3Nomes[0]);

//5 
console.log(' 5 : Quinto');

console.log(lista3Nomes[1]);

//6
console.log('6 : Sexto');

console.log(lista3Nomes[2]);

// teste
let tentivaDeInput = 10;
while(tentivaDeInput > 0){
    listaGenerica.push(parseInt(Math.random()*10));
    tentivaDeInput--;
}
console.log(listaGenerica);
