const criarMatriz = (l,c) => Array(l).fill(undefined).map(x => Array(c).fill(0)); 

const boss = () => {
  let lin = Number(prompt(`Digite a quantidade de linhas:`)),
  col = Number(prompt(`Digite a quantidade de colunas:`));
  console.log(criarMatriz(lin,col))
  console.log(criarMatriz(lin,col).length)
}
let lin = 5,col = 5;
console.log(criarMatriz(lin,col))
console.log(criarMatriz(lin,col).length)
// boss()
