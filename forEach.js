// forEach é uma função callback, ou seja, uma função que chama outra função.

const notas = [ 5, 6.5, 8.5, 9]

somaDasNotas = 0

notas.forEach( nota => {
    somaDasNotas += nota
})

let media = somaDasNotas/notas.length

console.log(media)