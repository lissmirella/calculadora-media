
// let nota1 = 5.5
// let nota2 = 7
// let nota3 = 8.3
// let nota4 = 9.7

// let media = (nota1 + nota2 + nota3 + nota4) / 4

const notas = [5.5 , 6.7, 8, 8.5]
//notas.push(8)
notas.pop()


const media = (notas[0] + notas[1] + notas[2]) / notas.length
//console.log(notas)

console.log(media)

console.log(`Sua média final é ${media}.`)