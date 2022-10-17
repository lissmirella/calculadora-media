// MAP é utilizado para criar uma nova array a partir de uma ja existente.
//MAP nos retorna algo, diferente de FOREACH que  só percorre a lista.

//DESAFIO: adicionar 1 ponta a cada nota da lista inicial, sem passar da nota 10.

const notas = [10, 9, 8, 7 , 6]

const notasAtualizadas = notas.map( notas => notas == 10 ? notas : ++notas)

console.log(notasAtualizadas)

//map me etrega uma nova lista
//é um callback
//usei ordenador ternário