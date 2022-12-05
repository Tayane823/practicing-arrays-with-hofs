const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 -Crie uma função que percorra o array imprimindo todos os valores nele contidos com a função console.log();
const showAllNumbers = (array) => array.forEach((number) => console.log(number))
//showAllNumbers(numbers)

//2 - Crie uma função que some todos os valores contidos no array e imprima o resultado;
const sumNumbers = (acc, curr) => acc + curr

const totalNumbers = numbers.reduce(sumNumbers, 0)
//console.log(totalNumbers)

// 3 - Calcule e imprima a média aritmética dos valores contidos no array;
const meanResult = totalNumbers / numbers.length
//console.log(meanResult)

/* 4 - Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, 
imprima a mensagem: “valor menor ou igual a 20”;Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: 
“valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;*/
const checkValue = (variable) => {
    if (variable > 20) {
        console.log(`Valor maior que 20`)
    } else 
    {console.log(`Valor menor ou igual a 20`)}
}
//checkValue(meanResult)

// 5 - Descubra quais valores ímpares existem no array e imprima o resultado.;
const oddNumbers = (array) => array.filter((number) => number % 2 !== 0)
//console.log(oddNumbers(numbers))

// 6 - Imprima o resultado da divisão de cada um dos elementos do array por 2;
const arrayForTwo = (array) => array.map((number) => number / 2)
console.log(arrayForTwo(numbers))