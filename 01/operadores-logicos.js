const notaFinal = 7;
const faltas = 3;
const advertencias = 0;

if (notaFinal < 7 &&   faltas > 4) {
    console.log('Reprovado, burro do krlh');
} else {
    console.log('Não foi reprovado por falta');
}

if (faltas >= 2 && !advertencias) {
    console.log('Recebeu bonus');
} else {
    console.log('Não recebeu bonus');
}