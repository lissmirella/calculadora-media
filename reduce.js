//REDUCE soma todos os valores de uma array
// desafio: tirar a media de cada sala
//como vai usar a função mais de uma vez, é mais limpo criar uma funcition, descreve-la, e então chama-la no moemnto que for preciso ativa-la

const salaJS = [ 7,9,6,4,10,8,9,7]
const salaJava = [5,8,7,8,10,9,5]
const salaPhyton = [ 10,7, 8,8,6]

function mediaSala (notasDaSala) {
    const SomaDasNotas = notasDaSala.reduce( (acum,atual) => acum + atual, 0)
    return SomaDasNotas/notasDaSala.length
 }

console.log(`Médida da sala JS é ${mediaSala(salaJS)}.`)
console.log(`Médida da sala Java é ${mediaSala(salaJava)}.`)
console.log(`Médida da sala Phyton é ${mediaSala(salaPhyton)}.`)