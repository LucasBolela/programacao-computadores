console.log(`Exercicio 9`)

const boss = () => {
  let number= Number(prompt(`Digite um numero:`)),
  soma = ex9(number)
  console.log(`Soma dos divisores de ${number}: ${soma}`)
}

const ex9 = number => {
  let i = number,
  sum = [];
  while(i>0){
    if(number%i==0)
      sum.push(i)
    i--
  }
  return sum.reduce((total, num)=> total + num, 0)
}
boss()