console.log(`Exercicio 7`)

const boss = () => {
  let array = [], media = calcMedia(array);
  console.log(`Media: ${media}`) 
  console.log(array)
}

const calcMedia = arr => {
  let number = Number(prompt("Informe um numero"));
  do{
    arr.push(number)
    number = Number(prompt("Informe outro numero ou negativo para finalizar:"))
  } while(number>=0)

  return arr.reduce((total, num)=>total+num)/arr.length;
}
boss()