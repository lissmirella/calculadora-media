const notas = [5.5,6,8,7.5]

let somaDasNotas = 0

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i]
}

let media = somaDasNotas/notas.length

console.log(media)