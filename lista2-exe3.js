function boss(){
  let opcao = Number(prompt(`Digite [1] Cadastrar \n [2] Media Idade \n [3] Maior Idade \n [4] Quantidade mulheres \n [5] Percentual \n [6] Sair`)),
  habitantes = [];
  cadastro(habitantes)
  do{
    switch (opcao) {
      case 1:
        cadastro(habitantes)
        break;
      case 2:
        console.log(`Média das idades das pessoas com olhos castanhos e altura maior que 1.60: ${mediaIdade(habitantes)}`)
        break;
      case 3:
        console.log(`Maior idade: ${maiorIdade(habitantes)}`)
        break;    
      case 4:
        console.log(`Quantidade de mulheres de 20 a 45 anos ou com altura 1,70 e olhos verdes: ${quantidade(habitantes)}`)
        break;
      case 5:
        console.log(`Percentual de homens: ${homens(habitantes)}%`)
        break;    
      default:
        alert("Opção Inválida!");
        break;
    }

    opcao = Number(prompt(`Digite [1] Cadastrar \n [2] Media Idade \n [3] Maior Idade \n [4] Quantidade mulheres \n [5] Percentual \n [6] Sair`))
  }while(opcao!= 6)
  console.log(`Obrigado por utilizar nosso software!`)
  console.log(habitantes)
}

const cadastro = habitantes => {
  habitantes.push({
    sexo:prompt(`Digite M ou F:`).toUpperCase(),
    idade: Number(prompt(`Digite a idade:`)),
    altura: Number(prompt(`Digite a altura:`)),
    olho: prompt(`Digite A - azul, V - verde, C - castanho:`).toUpperCase()
  })
}
const mediaIdade = habitantes => {
  let cont=0, total=0;
  for(habitante of habitantes){
    if(habitante.altura>160 && habitante.olho == "C"){
      cont++
      total+=habitante.idade
    }
  }
  return cont==0?cont:total/cont
}
const maiorIdade = habitantes => habitantes.length==0?0:habitantes.length==1?habitantes[0].idade:habitantes.reduce((maior, el)=>maior<el.idade?maior=el.idade:maior,habitantes[0].idade)

const quantidade = habitantes => habitantes.reduce((total,el)=>el.sexo=='F' && (el.idade>20 && el.idade<=45) || (el.altura<170 && el.olho == "V")?total+1:total, 0)

const homens = habitantes => habitantes.reduce((total,el)=>el.sexo=='M'?total+1:total,0)/habitantes.length*100