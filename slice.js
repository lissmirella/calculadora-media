const alunos = [`Ana`, `Maria`, `João`, `José`, `Ravi`, `Rachel`, `Lucas`, `Enzo`]
console.log(`O numero total de alunos na escola é ${alunos.length}.`)

const sala1 = alunos.slice(0, alunos.length/2)
const sala2 = alunos.slice(alunos.length/2)

console.log(`Sendo ${sala1.length} na sala A, e ${sala2.length} na sala B`)
