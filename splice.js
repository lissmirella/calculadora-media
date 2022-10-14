//SPLICE permite que eu retire elementos de qlq lugar da array

const alunos = [`Ana`, `Maria`, `João`, `José`, `Ravi`, `Rachel`, `Lucas`, `Enzo`]
// alunos.splice(0,1, `retirei 2 e inclui Mirella`) --> aqui retirei quem ta no i 0 e 1, e inclui Mirella
alunos.splice(5,0, `Incluindo sem retirar`)
console.log(`Lista de chamada: ${alunos}.`)

