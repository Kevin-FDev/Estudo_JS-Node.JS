const estudanteReprovou = (notaFinal, faltas) => {
    if(notaFinal < 7 && faltas > 4) {
        return true;
    
    } else {
        return false;
        }
}

const exibeNomeEstudante = (nome) => nome;


console.log(estudanteReprovou(7, 4))

console.log(exibeNomeEstudante('caroline'))