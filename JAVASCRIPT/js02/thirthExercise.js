/* FAÇA UM PROGRAMA QUE GERE UM NÚMERO ALEATÓRIO ENTRE 1 E 10, ESSE É O NÚMERO 'GANHADOR'
ENTÃO ELE TAMBÉM IRÁ GERAR UM NÚMERO ALEATÓRIO ENTRE 1 E 10, E VERIFICA SE A PESSOA GANHOU OU NÃO
EM CASO DE TER GANHADO, MOSTRA O PRÊMIO; SE NÃO GANHOU, MOSTRA OUTRA MENSAGEM */

const numberPC = 7;
const numberRandom = Math.floor(Math.random() * 10) + 1;
console.log(numberRandom)

if (numberPC === numberRandom){
    console.log('YES! You are the winner!')
} else {
    console.log('Sorry, you lost')
}