const alunos = ['Kevin', 'João,', 'Julia', 'Samuel'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibiNOmeENota(aluno){
    if (lista[0].includes(aluno)) {
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a média ${mediaAluno}`)
    }else {
        console.log("Estudante não encontrado");
    }
}

exibiNOmeENota('Julia');
exibiNOmeENota('Vini');
