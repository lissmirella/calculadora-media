//FILTER é uma função callback
// retorna sempre em boolean, true or false

const atletas = [`Juan`, `Mario`, `Leo`, `Jonas`]
const alturaDosAtletas = [1.83 ,1.67, 1.74, 1.90]

const atletasSelecionados = atletas.filter( (nome, indice) => alturaDosAtletas[indice] > 1.80 )

console.log(atletasSelecionados)

//parametro (nome) não foi utilizado dentro da função. Então posso substitui-lo por _ (underline)