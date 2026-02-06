const numerosPares = [2, 4, 6];
const numeroImpares = [1, 3, 5];

const numeros = [numeroImpares, numerosPares];

const [num1, num2, ...outroNumeros] = [1, 2, 3, 4, 5];


const pessoa = {
    nome: 'Kevin',
    idade: 20
}

const pessoaComTelefone = {...pessoa, telefone: 12222222222}

const {nome } = pessoa

console.log(nome);