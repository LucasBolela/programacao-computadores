// es1, es2, es3, es4
function soma(x, y){
  console.log(x+y)
}
soma(2, 7)

// es5
let soma = function(x, y){
  console.log(x+y)
}
soma(2, 7)
// es6
// arrow function - funções com seta =>
// antes da seta temos o parametro da função (x, y)
// depois da seta temos a implementação da função (console.log(x + y))
// ausência da palavra function
// função anônima - função sem nome
let soma = (x, y) => console.log(x + y)
soma(2, 7)


let vet = [2, 4, 7, 9, 11]
console.log(vet.filter( (elemento => elemento > 5) ))