const alunos = [ `João`, ` Maria`, ` Marcio`, `Milena`]
const mediaDosAlunos = [ 10, 8, 7, 8.5]

const listaDeMediaEAlunos = [ alunos, mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeMediaEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeMediaEAlunos[0].indexOf(nomeDoAluno)
        return listaDeMediaEAlunos[0][indice] + ", sua nota é " + listaDeMediaEAlunos[1][indice] 
    } else
    return "Aluno não cadastrado"
}

console.log(exibeNomeNota("João"))