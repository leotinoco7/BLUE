// // Para o desenvolvimento do projeto final será permitido que os alunos trabalhem em trios para troca de ideias e de conhecimento e que vocês já se acostumem a 
// trabalhar em colaboração, a entrega do projeto deve ser feita individualmente pelo classroom entregando o link do projeto desenvolvido por vocês pelo github. 
// Vocês irão em trio desenvolver o projeto porém todos devem entregar o link do GitHub pelo classroom.

// // Você irá criar um jogo de ficção interativa que simule a rotina diária de um personagem. Você pode escolher entre rotinas matinais, rotinas de trabalho, 
// rotinas de estudos, aventuras épicas, histórias assustadoras, entre outras. A ideia do jogo é que o jogador faça as 
// escolhas para o seu personagem e o conduza pela história. 
// Cada escolha irá gerar uma consequência diferente para o seu personagem. Você será responsável por determinar o inicio e término da história, além de avançar o tempo a 
// cada escolha.

// // É importante que haja uma passagem de tempo e períodos determinados que determinarão os ciclos de repetição das possibilidades do personagem, 
// por exemplo: Manhã, tarde, noite, dormir - Recomeça o ciclo.


// // Critérios de Avaliação:


// Variáveis para armazenar os status do personagem (1,0 ponto);
// Perguntas que alterarão esses status do personagem (1,0 ponto);
// Laço de repetição que determinará os ciclos em que a história vai se passar. Determinar o que acontecerá ao final do ciclo e como ficarão os status. (1,0 ponto);
// Variável para controle da passagem do tempo (1,0 ponto);
// Variáveis de controle dos status e situações da história (1,0 ponto);
// Condicionais para alterações dessas variáveis (1,5 ponto);
// Funções para executar cada uma das tarefas (1,5 ponto);
// Conteúdo de condicionais, laços, funções e objetos bem aplicados (2,0 pontos);

var prompt = require('prompt-sync')();

dificuldade = [];

const player = {
    Nome: '',
    Idade: '',
    Saciedade: 5,
    Stamina: 5,
    Social: 5,        
    
}
let projeto = 0;



function CheckStatus () {
    if (player.Saciedade == 0){
        console.log(`Você não levou a sério os limites do seu corpo...
        
        Você morreu de Fome!
        `)
    }else if (player.Saciedade < 2 ){
        console.log(`Você está Morrendo de Fome.`)
    }else if (player.Saciedade > 1 && player.Saciedade < 5){
        console.log(`Você está com Muita Fome.`)
    }else if (player.Saciedade > 4 && player.Saciedade < 7){
        console.log(`Você está sentindo Fome.`)
    }else if (player.Saciedade > 6 && player.Saciedade < 10){
        console.log(`Você está satisfeito.`)
    }else if (player.Saciedade > 9 ){
        console.log(`Você está Emtupido`)
    }
    if (player.Stamina == 0){
        console.log(`Você não levou a sério os limites do seu corpo...
        
        Você morreu de Cansaço!
        `)
    }else if (player.Stamina < 2 ){
        console.log(`Você está Exausto.`)
    }else if (player.Stamina > 1 && player.Stamina < 5){
        console.log(`Você está Muito Cansado.`)
    }else if (player.Stamina > 4 && player.Stamina < 7){
        console.log(`Você começa a se sentir Cansado.`)
    }else if (player.Stamina > 6 && player.Stamina < 10){
        console.log(`Você está Descançado.`)
    }else if (player.Stamina > 9 ){
        console.log(`Você está tremendo de tanta Energia.`)
    }



}
console.log('Life Simulator v1')
player.Nome = prompt("Digite seu nome: ")

console.log('Selecione o modo de dificuldade:')

do dificuldade.push = prompt('1) Easy      2) Medium       3) Hard')
if (dificuldade.push !== easy || dificuldade.push !== medium || dificuldade !== hard)
