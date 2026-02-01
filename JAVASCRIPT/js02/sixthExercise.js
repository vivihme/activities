/* FAÇA UM PROGRAMA ONDE OS JURADOS VÃO DAR A EXPLICAÇÃO PARA CADA NOTA DADA
SÃO PERMITIDAS NOTAS DE 0 A 10. CADA NOTA DEVE CONTER UMA MENSAGEM DIFERENTE
*/
const prompt = require('prompt-sync')();
let grade = Number(prompt('Type the grade: '));

switch (grade) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('Failed!');
        break;
    case 5:
    case 6:
        console.log('Recovery');
        break;
    case 7:
    case 8:
    case 9:
        console.log('Passed!');
        break;
    case 10:
        console.log('Congratulations, you nailed it!');
        break;
    default:
        console.log('Invalid grade! Please enter a number between 0 and 10.')
}