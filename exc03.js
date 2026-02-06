// const numero = [10, 8.5, 5, 6.5, 8, 7.5,];

// let soma = 0;

// for (let numeros of numero) {
//     soma += numeros;
// }

// const somaTotal = soma / numero.length;

// console.log(somaTotal);

/////////////////////////////////////

// function exibirArray (){
//     const numero = [0, 1, 2, 3, 4, 5];

//     return numero;
// }

// console.log(exibirArray());

/////////////////////////////////////

const numeros = [10, 20, 30, 40]
function somaValores (arr) {
    
    let soma = 0;

    for (let i = 0; i < arr.length; i++) {
        soma += arr[1];
    }

    return soma;


}

console.log(somaValores(numeros));

